import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import loggingConfig from './config/logging.config';
import { LoggingModule } from './logging/logging.module';
import { DatabaseModule } from './providers/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loggingConfig],
      envFilePath: ['.env'],
    }),
    DatabaseModule,
    LoggingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
