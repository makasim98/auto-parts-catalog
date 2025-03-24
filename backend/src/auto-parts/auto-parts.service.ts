import { Injectable } from '@nestjs/common';
import { CreateAutoPartDto } from './dto/create-auto-part.dto';
import { UpdateAutoPartDto } from './dto/update-auto-part.dto';
import { DatabaseService } from 'src/database/database.service';
import { AutoPart } from '@prisma/client';

@Injectable()
export class AutoPartsService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createAutoPartDto: CreateAutoPartDto): Promise<AutoPart> {
    return this.databaseService.autoPart.create({
      data: createAutoPartDto,
    });
  }

  findAll(): Promise<AutoPart[]> {
    return this.databaseService.autoPart.findMany();
  }

  findOne(id: number): Promise<AutoPart> {
    return this.databaseService.autoPart.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAutoPartDto: UpdateAutoPartDto): Promise<AutoPart> {
    return this.databaseService.autoPart.update({
      where: { id },
      data: updateAutoPartDto,
    });
  }

  remove(id: number): Promise<AutoPart> {
    return this.databaseService.autoPart.delete({
      where: { id },
    });
  }
}
