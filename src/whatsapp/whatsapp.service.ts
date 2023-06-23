// whatsapp.service.ts
import { Injectable } from '@nestjs/common';
import { Client, LocalAuth } from 'whatsapp-web.js';


@Injectable()
export class WhatsappService {
  private client: Client;  
  
  constructor() {
    
    const options = {
        authStrategy: new LocalAuth(),      
        puppeteer: {
            headless: false,            
            ignoreHTTPSErrors: true,            
            args: 
            [
                `--proxy-server=http://${process.env.PROXY_HOST}:${process.env.PROXY_PORT}`,                   
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run', 
                '--no-zygote',               
                '--disable-gpu',                             
            ],            
            ignoreDefaultArgs: true,
            executablePath: `${process.env.CHROME_PATH}`           
        },
    };
    
    this.client = new Client(options);    
    
  }

  getClient() {
    return this.client;
  }

  getInitializeClient() {
    return this.client.initialize();
  }

  async sendMessage(number: string, message: string) {
    number = number.includes('+') ? number.substring(1) : number;
    number = number.includes('@c.us') ? number : `${number}@c.us`;

    await this.client.sendMessage(number, message);
  }


}
