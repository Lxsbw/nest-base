/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-21 13:47:38
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 15:43:47
 */

import { Entity, Column } from 'typeorm';
import { BaseModel } from '../base/base-model';

@Entity({
  name: 'mobile_phone',
})
export class MobilePhone extends BaseModel {
  @Column({
    type: 'varchar',
    length: 50,
    name: 'model_name',
    comment: '型号',
  })
  modelName: string;

  @Column({
    type: 'varchar',
    length: 50,
    comment: '尺寸',
  })
  size: string;

  @Column({
    type: 'varchar',
    length: 50,
    comment: '规格',
  })
  spec: string;

  @Column({
    type: 'integer',
    comment: '内存',
  })
  ram: number;

  @Column({
    type: 'integer',
    comment: '空间',
  })
  rom: number;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'seria_number',
    comment: '序列号',
  })
  seriaNumber: string;
}
