/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 23:32:15
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 17:52:59
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, FindManyOptions } from 'typeorm';
import { MobilePhone } from '../models/mobile-phone.entity';
import {
  IFindIn,
  IFindOneIn,
  ICreateIn,
  ICreateOut,
  IUpdateIn,
  IDelIn
} from '../interfaces/mobile-phone';
import * as _ from 'lodash';
import * as SnowFlake from '../utils/SnowFlake';

@Injectable()
export class MobilePhoneService {
  constructor(
    @InjectRepository(MobilePhone)
    private readonly mobilePhoneRepository: Repository<MobilePhone>
  ) {}

  /**
   * 查找
   */
  async findAll(params: IFindIn): Promise<any> {
    console.log('service : ', params);
    const { limit, offset, ...filter } = params;
    const where: any = {};
    const order: any = { id: 'DESC', createdAt: 'DESC' };

    // 匹配id
    if (filter.id) {
      where.id = filter.id;
    }
    // 模糊匹配名称
    if (filter.modelName) {
      where.modelName = Like(`${filter.modelName}%`);
    }

    const options: FindManyOptions = {
      where,
      order,
      skip: offset,
      take: limit
    };

    const [rows, count] = await this.mobilePhoneRepository.findAndCount(
      options
    );

    return { count, rows };
  }

  /**
   * id查找
   */
  async findOne(params: IFindOneIn): Promise<any> {
    const where: any = {};
    // 匹配id
    if (params.id) {
      where.id = params.id;
    }
    const result = await this.mobilePhoneRepository.findOne({ where });
    return result;
  }

  /**
   * 添加手机
   */
  async create(param: ICreateIn): Promise<ICreateOut> {
    const inse = param as MobilePhone;
    inse.id = SnowFlake.GetId();
    const entity = await this.mobilePhoneRepository.save(inse);

    console.log('service entity : ', entity);

    return { id: entity.id };
  }

  /**
   * 更新
   */
  async update(param: IUpdateIn): Promise<any> {
    let uData: any = {};
    if (param.modelName) {
      uData.modelName = param.modelName;
    }
    if (param.size) {
      uData.size = param.size;
    }
    if (param.spec) {
      uData.spec = param.spec;
    }
    if (param.ram) {
      uData.ram = _.toInteger(param.ram);
    }
    if (param.rom) {
      uData.rom = _.toInteger(param.rom);
    }
    if (param.seriaNumber) {
      uData.seriaNumber = param.seriaNumber;
    }

    const where = { id: param.id };
    // console.log("where : ", where);
    const result = await this.mobilePhoneRepository.update(where, uData);
    console.log(result);
    return result;
  }

  /**
   * 删除
   */
  async delete(param: IDelIn): Promise<any> {
    console.log(param);

    const result = await this.mobilePhoneRepository.softDelete({
      id: param.id
    });

    console.log('result : ' + result);
    return result;
  }
}
