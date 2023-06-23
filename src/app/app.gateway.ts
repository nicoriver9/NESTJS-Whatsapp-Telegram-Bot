// app.gateway.ts
import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WebSocketServer } from '@nestjs/websockets';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import { Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {
  constructor(private whatsappService: WhatsappService) {}

  @WebSocketServer() server: Server;

  afterInit(server: Server) {
    const client = this.whatsappService.getClient();
    client.initialize();
    client.on('qr', qr => {
      this.server.emit('qr', qr);
      console.log(qr);
    });
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
