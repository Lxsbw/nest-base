import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  console.log('====================================');
  console.log('🚀  Your awesome APP is launching...');
  console.log('====================================');

  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  // app.get 可以获取到对应初始化成功的实例!
  const configService = app.get(ConfigService);
  const listen = configService.get('listen');
  // console.log('config listen :' + JSON.stringify(listen));

  app.use(bodyParser.json());

  await app.listen(listen.port);

  // Server is listening.
  console.log('====================================');
  console.log(`✅  http://${listen.hostname}:${listen.port}`);
  console.log(`✅  http://${listen.hostname}:${listen.port}/api-docs/swagger`);
  console.log(`✅  http://${listen.hostname}:${listen.port}/unittest/:api`);
  console.log(`✅  http://${listen.hostname}:${listen.port}/interface/:api`);
  console.log('✅  Your awesome APP launched');
  console.log('====================================');
}
bootstrap();
