import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAutoPartDto {
  @IsString()
  @IsNotEmpty()
  readonly ref: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description?: string;

  @IsNumber()
  readonly price?: number;

  @IsString()
  readonly thumbnail: string;
}
