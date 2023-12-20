import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.use(cookieParser())
  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT');
  await app.listen(PORT);
  console.log('Server start on port ' + PORT);
}
bootstrap();
