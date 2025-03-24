import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AutoPartsModule } from './auto-parts/auto-parts.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    DatabaseModule,
    AutoPartsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
