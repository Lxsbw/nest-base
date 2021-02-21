import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MobilePhoneController } from '../controller/mobile-phone';
import { MobilePhoneService } from '../service/mobile-phone';
import { MobilePhone } from '../models/mobile-phone.entity';
@Module({
  imports: [TypeOrmModule.forFeature([MobilePhone])],
  controllers: [MobilePhoneController],
  providers: [MobilePhoneService],
})
export class MobilePhoneModule {}
