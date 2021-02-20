/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 23:16:32
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-20 23:35:23
 */

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export interface Cat {
  name: string;
  age: number;
  breed: string;
}
