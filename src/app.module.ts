/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-21 00:10:15
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 00:54:42
 */
import { Module } from '@nestjs/common';
import { MobilePhoneModule } from './modules/mobile-phone';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import customConfig from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 作用于全局
      load: [customConfig], // 加载自定义配置项
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // 数据库配置项依赖于ConfigModule，需在此引入
      useFactory: (configService: ConfigService) =>
        configService.get('DATABASE_CONFIG'),
      inject: [ConfigService], // 记得注入服务，不然useFactory函数中获取不到ConfigService
    }),
    MobilePhoneModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
