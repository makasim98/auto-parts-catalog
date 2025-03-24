import { Module } from '@nestjs/common';
import { AutoPartsService } from './auto-parts.service';
import { AutoPartsController } from './auto-parts.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AutoPartsController],
  providers: [AutoPartsService],
})
export class AutoPartsModule {}
