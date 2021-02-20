/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 23:32:15
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-20 23:48:53
 */
import { Injectable } from '@nestjs/common';
import { Cat } from '../interfaces/create-cat.dto';

@Injectable()
export class MobilePhoneService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findOne(): Cat {
    console.log('server');
    let catObj: Cat = {
      name: 'lxsbw',
      age: 18,
      breed: '1929',
    };

    return catObj;
  }
}
