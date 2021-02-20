/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 22:41:47
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-20 23:45:31
 */
import { Controller, Body, Param, Get, Post } from '@nestjs/common';
import { MobilePhoneService } from '../service/mobile-phone';
import { CreateCatDto, Cat } from '../interfaces/create-cat.dto';

@Controller('/api/mobile-phone')
export class MobilePhoneController {
  constructor(private readonly mobilePhoneService: MobilePhoneService) {}

  @Get('/:id')
  async findOne(@Param() params): Promise<Cat> {
    console.log(params.id);
    return this.mobilePhoneService.findOne();
  }

  @Get()
  async getHello(): Promise<string> {
    return 'This action returns all cats';
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
