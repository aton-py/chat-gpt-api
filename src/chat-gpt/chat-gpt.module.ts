import { Module } from '@nestjs/common';
import { ChatGPTService } from './chat-gpt.service';
import { ChatGPTController } from './chat-gpt.controller';

@Module({
  controllers: [ChatGPTController],
  providers: [ChatGPTService],
})
export class ChatGPTModule {}
