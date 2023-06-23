import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as dotenv from 'dotenv';

import { AlarmService } from './alarm/alarm.service';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'src/public'));  
  app.enableCors();
  await app.listen(process.env.SERVER_PORT);

  const alarmService = app.get(AlarmService);
  setInterval(() => alarmService.checkAlarms(), 3000);
}
bootstrap();
