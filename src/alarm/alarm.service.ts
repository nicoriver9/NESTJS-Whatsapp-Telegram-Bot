// alarm.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Alarm } from '../models/alarm.model';
import { User } from '../models/user.model';
import { WhatsappService } from '../whatsapp/whatsapp.service';

@Injectable()
export class AlarmService {
  constructor(
    @InjectModel(Alarm)
    private alarmModel: typeof Alarm,
    @InjectModel(User)
    private userModel: typeof User,
    private whatsappService: WhatsappService,
  ) {}

  async checkAlarms() {
    const alarms = await this.alarmModel.findAll({
      where: {
        msgState: 0,
      },
      include: [User],
    });
    
    for (const alarm of alarms) {
      
      if (this.whatsappService.getClient().info === undefined){
        console.log('the system is not ready yet');
      }
      else{        
        try {
          const message = `Dear ${alarm.user.fullname}, ${alarm.body}`;
          await this.whatsappService.sendMessage(alarm.user.celNumber, message);
          alarm.msgState = 1;
          await alarm.save();
          
        } catch (error) {
          console.log(error);
        }
        }

    }
  }
}
