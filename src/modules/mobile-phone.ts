import { Module } from '@nestjs/common';
import { MobilePhoneController } from '../controller/mobile-phone';
import { MobilePhoneService } from '../service/mobile-phone';

@Module({
  controllers: [MobilePhoneController],
  providers: [MobilePhoneService],
})
export class MobilePhoneModule {}
