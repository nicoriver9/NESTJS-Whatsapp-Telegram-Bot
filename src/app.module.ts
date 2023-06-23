import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsappService } from './whatsapp/whatsapp.service';
import { AppGateway } from './app/app.gateway';
import { AlarmService } from './alarm/alarm.service';
import * as dotenv from 'dotenv';

dotenv.config();

import { Alarm } from './models/alarm.model';
import { User } from './models/user.model';

@Module({
  imports: [    
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      // schema: process.env.SCHEMA,
      autoLoadModels: true,
      // synchronize: true,
    }),
    SequelizeModule.forFeature([Alarm, User]),
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService, 
    WhatsappService, 
    AppGateway, 
    AlarmService
  ],
})
export class AppModule {}
