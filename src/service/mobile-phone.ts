/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 23:32:15
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 15:48:53
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MobilePhone } from '../models/mobile-phone.entity';
import { IFindOneIn } from '../interfaces/mobile-phone';
@Injectable()
export class MobilePhoneService {
  constructor(
    @InjectRepository(MobilePhone)
    private readonly mobilePhoneRepository: Repository<MobilePhone>,
  ) {}

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
}
