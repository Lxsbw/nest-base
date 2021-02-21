/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 22:41:47
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 01:24:32
 */
import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get('/')
  async home() {
    return 'Hello Nestjs!';
  }
}
