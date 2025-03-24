import { CreateAutoPartDto } from './create-auto-part.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAutoPartDto extends PartialType(CreateAutoPartDto) {}
