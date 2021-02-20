/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 22:41:47
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-20 23:17:41
 */
import { Controller, Body, Param, Get, Post } from '@nestjs/common';
import { CreateCatDto } from '../interfaces/create-cat.dto';

@Controller('api/mobile-phone')
export class MobilePhoneController {
  // constructor(private readonly appService: AppService) {}

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
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
