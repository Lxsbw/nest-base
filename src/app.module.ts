/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-21 00:10:15
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 00:10:37
 */
import { Module } from '@nestjs/common';
import { MobilePhoneModule } from './modules/mobile-phone';

@Module({
  imports: [MobilePhoneModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
