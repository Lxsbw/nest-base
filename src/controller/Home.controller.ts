/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 22:41:47
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 15:57:41
 */
import { Controller, Get } from '@nestjs/common';
import { List } from 'linqts';
import * as jslinq from 'jslinq';

@Controller()
export class HomeController {
  @Get('/')
  async home() {
    return 'Hello Nestjs!';
  }

  @Get('/linq')
  async linq() {
    // const result = new List<number>([1, 2, 3, 4, 5])
    //   .Where((x) => x > 3)
    //   .Select((y) => y * 2)
    //   .OrderByDescending((x) => x)
    //   .ToArray(); // > [8, 10]

    const data = [
      {
        id: 1,
        name: 'one',
        category: 'fruits',
        countries: ['Italy', 'Austria']
      },
      {
        id: 2,
        name: 'two',
        category: 'vegetables',
        countries: ['Italy', 'Germany']
      },
      { id: 2, name: 'three', category: 'vegetables', countries: ['Germany'] },
      { id: 2, name: 'ta', category: 'vegetables', countries: ['Germany'] },
      { id: 4, name: 'four', category: 'fruits', countries: ['Japan'] },
      { id: 5, name: 'five', category: 'fruits', countries: ['Japan', 'Italy'] }
    ];

    const queryObj = jslinq(data);
    const result = jslinq(data).orderBy((x) => x.id);

    // const result = queryObj.singleOrDefault(function (el) {
    //   return el.name == 'one';
    // });

    return result;
  }
}
