import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/shemas/user.shema';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRoles } from './enum/role.enum';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  findAll(role?: UserRoles) {
    const filter = role ? { role: role } : {};
    return this.userModel.find(filter);
  }

  findById(id: string) {
    try {
      return this.userModel.findById(id).exec();
    } catch {
      throw new NotFoundException('User Not Found or Id is invalid format');
    }
  }

  create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
