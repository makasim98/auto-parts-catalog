// eslint-disable-next-line prettier/prettier
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseEnumPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRoles } from './enum/role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // GET /users or /users?role=value
  @Get()
  getAll(
    @Query('role', new ParseEnumPipe(UserRoles, { optional: true }))
    role?: UserRoles,
  ) {
    return this.userService.findAll(role);
  }

  // GET /users/:id
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  // POST /users
  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // PATCH /users/:id
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) userUpdate: UpdateUserDto,
  ) {
    return this.userService.update(id, userUpdate);
  }

  // DELETE /users/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
