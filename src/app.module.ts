import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MobilePhoneController } from './controller/mobile-phone';

@Module({
  imports: [],
  controllers: [AppController, MobilePhoneController],
  providers: [AppService],
})
export class AppModule {}