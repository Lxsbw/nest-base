/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 22:41:47
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 14:09:22
 */
import { Controller, Body, Param, Get, Post } from '@nestjs/common';
import { MobilePhoneService } from '../service/mobile-phone';

@Controller('/api/mobile-phone')
export class MobilePhoneController {
  constructor(private readonly mobilePhoneService: MobilePhoneService) {}

  @Get('/:id')
  async findOne(@Param() params): Promise<any> {
    console.log(params.id);
    return this.mobilePhoneService.findOne({ id: params.id });
  }
}
