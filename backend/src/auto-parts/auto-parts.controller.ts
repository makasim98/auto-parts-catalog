/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { AutoPartsService } from './auto-parts.service';
import { CreateAutoPartDto } from './dto/create-auto-part.dto';
import { UpdateAutoPartDto } from './dto/update-auto-part.dto';

@Controller('auto-parts')
export class AutoPartsController {
  constructor(private readonly autoPartsService: AutoPartsService) {}

  @Post()
  create(@Body(ValidationPipe) createAutoPartDto: CreateAutoPartDto) {
    return this.autoPartsService.create(createAutoPartDto);
  }

  @Get()
  findAll() {
    return this.autoPartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.autoPartsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateAutoPartDto: UpdateAutoPartDto) {
    return this.autoPartsService.update(id, updateAutoPartDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.autoPartsService.remove(id);
  }
}
