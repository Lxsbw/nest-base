/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-20 22:41:47
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 17:56:02
 */
import {
  Controller,
  Body,
  Param,
  Query,
  Get,
  Post,
  Put,
  Delete
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { MobilePhoneService } from '../service/mobile-phone.service';
import { ICreateIn, IUpdateIn } from '../interfaces/mobile-phone';

@Controller('/api/mobile-phone')
@ApiTags('MobilePhone')
export class MobilePhoneController {
  constructor(private readonly mobilePhoneService: MobilePhoneService) {}

  @Get('/findall')
  @ApiOperation({ description: '查找', summary: '查找' })
  @ApiQuery({
    name: 'offset',
    type: 'number',
    required: true,
    description: '当前页',
    example: 0
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: true,
    description: '每页数量',
    example: 10
  })
  @ApiQuery({ name: 'id', type: 'string', description: 'id', required: false })
  @ApiQuery({
    name: 'modelName',
    type: 'string',
    description: '型号',
    required: false
  })
  async findAll(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Query('id') id: string,
    @Query('modelName') modelName: string
  ) {
    const query = {
      offset: offset,
      limit: limit,
      id: id,
      modelName: modelName
    };
    console.log('query : ' + JSON.stringify(query));
    const result = await this.mobilePhoneService.findAll(query);
    return { success: true, message: 'OK', data: result };
  }

  @Get('/:id')
  @ApiOperation({ description: 'id查找', summary: 'id查找' })
  @ApiParam({
    name: 'id',
    description: 'id',
    required: true
  })
  async findOne(@Param() params): Promise<any> {
    console.log(params.id);
    return this.mobilePhoneService.findOne({ id: params.id });
  }

  @Post('/create')
  @ApiOperation({
    description: '添加手机',
    summary: '添加手机'
    // requestBody: { description: '手机信息', required: true, content: null }
  })
  async create(@Body() param: ICreateIn) {
    const result = await this.mobilePhoneService.create(param);
    return { success: true, message: 'OK', data: result };
  }

  @Put('/update')
  @ApiOperation({
    description: '更新手机',
    summary: '更新手机'
  })
  async update(@Body() param: IUpdateIn) {
    const result = await this.mobilePhoneService.update(param);
    return { success: true, message: 'OK', data: result };
  }

  @Delete('/delete/:id')
  @ApiOperation({
    description: '删除手机',
    summary: '删除手机'
  })
  @ApiParam({
    name: 'id',
    description: 'id',
    required: true
  })
  async delete(@Param('id') id: string) {
    const result = await this.mobilePhoneService.delete({ id: id });
    return { success: true, message: 'OK', data: result };
  }
}
