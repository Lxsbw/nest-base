/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-21 00:10:15
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 15:53:55
 */
import { Module } from '@nestjs/common';
import { MobilePhoneModule } from './modules/mobile-phone.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import customConfig from './config';
import { HomeController } from './controller/Home.controller';

@Module({
  imports: [
    MobilePhoneModule,
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
  ],
  controllers: [HomeController],
  providers: [],
})
export class AppModule {}
