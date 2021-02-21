/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-21 16:13:37
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 16:16:18
 */
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Nest.js example API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs/swagger', app, document);
}
