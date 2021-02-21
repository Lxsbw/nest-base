/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-21 16:13:37
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-21 18:05:10
 */
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Nestjs TypeScript Swagger')
    .setDescription(
      'This is a sample server Nestjs server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.'
    )
    .setVersion('1.0')
    .setContact('zhixiong.fu', 'https://github.com/Lxsbw', 'lxsbw@outlook.com')
    .setLicense('Apache 2.0', 'http://www.apache.org/licenses/LICENSE-2.0.html')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs/swagger', app, document);
}
