/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 22:41:47
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 15:57:41
 */
import { Controller, Get } from '@nestjs/common';
import { List } from 'linqts';

@Controller()
export class HomeController {
  @Get('/')
  async home() {
    return 'Hello Nestjs!';
  }

  @Get('/linq')
  async linq() {
    const result = new List<number>([1, 2, 3, 4, 5])
      .Where((x) => x > 3)
      .Select((y) => y * 2)
      .OrderByDescending((x) => x)
      .ToArray(); // > [8, 10]

    return result;
  }
}
