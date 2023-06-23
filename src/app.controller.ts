import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { WhatsappService } from './whatsapp/whatsapp.service';

@Controller()
export class AppController {
  constructor(
    private readonly whatsappService: WhatsappService,
    private readonly appService: AppService
    ) {}

  @Get()
  getClient() {
     this.whatsappService.getInitializeClient();
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
