/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-21 17:46:24
 * @Last Modified by:   zhixiong.fu
 * @Last Modified time: 2021-02-21 17:46:24
 */
import { ApiProperty } from '@nestjs/swagger';

/**
 * 查找
 */
export class IFindIn {
  @ApiProperty({
    type: 'number',
    required: true,
    description: '当前页'
  })
  offset?: number;

  @ApiProperty({
    type: 'number',
    required: true,
    description: '每页数量'
  })
  limit?: number;

  @ApiProperty({
    type: 'string',
    description: '筛选字段-id'
  })
  id?: string;

  @ApiProperty({
    type: 'string',
    description: '筛选字段-型号'
  })
  modelName?: string;
}

export class IFindOneIn {
  @ApiProperty({
    type: 'string',
    required: true,
    description: '筛选字段-id'
  })
  id?: string;
}

export class ICreateIn {
  /**
   * 型号
   */
  @ApiProperty({
    type: 'string',
    required: true,
    description: '型号',
    example: 'xx'
  })
  modelName: string;
  /**
   * 尺寸
   */
  @ApiProperty({
    type: 'string',
    required: true,
    description: '尺寸',
    example: '4.7'
  })
  size: string;
  /**
   * 规格
   */
  @ApiProperty({
    type: 'string',
    required: true,
    description: '规格',
    example: 'blue'
  })
  spec: string;
  /**
   * 内存
   */
  @ApiProperty({
    type: 'number',
    required: false,
    description: '内存',
    example: 800
  })
  ram: number;
  /**
   * 空间
   */
  @ApiProperty({
    type: 'number',
    required: false,
    description: '空间',
    example: 12800
  })
  rom: number;
  /**
   * 序列号
   */
  @ApiProperty({
    type: 'string',
    required: false,
    description: '序列号',
    example: '00010'
  })
  seriaNumber: string;
}

export class ICreateOut {
  /**
   * id
   */
  @ApiProperty({
    type: 'string',
    description: 'id'
  })
  id: string;
}

export class IUpdateIn {
  /**
   * id
   */
  @ApiProperty({
    type: 'string',
    description: 'id'
  })
  id: string;
  /**
   * 型号
   */
  @ApiProperty({
    type: 'string',
    required: true,
    description: '型号'
  })
  modelName: string;
  /**
   * 尺寸
   */
  @ApiProperty({
    type: 'string',
    required: true,
    description: '尺寸'
  })
  size: string;
  /**
   * 规格
   */
  @ApiProperty({
    type: 'string',
    required: true,
    description: '规格'
  })
  spec: string;
  /**
   * 内存
   */
  @ApiProperty({
    type: 'number',
    required: false,
    description: '内存'
  })
  ram: number;
  /**
   * 空间
   */
  @ApiProperty({
    type: 'number',
    required: false,
    description: '空间'
  })
  rom: number;
  /**
   * 序列号
   */
  @ApiProperty({
    type: 'string',
    required: false,
    description: '序列号'
  })
  seriaNumber: string;
}

export class IDelIn {
  /**
   * id
   */
  @ApiProperty({
    type: 'string',
    description: 'id'
  })
  id: string;
}
