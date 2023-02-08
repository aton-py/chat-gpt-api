import { Module } from '@nestjs/common';
import { ChatGPTModule } from './chat-gpt/chat-gpt.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ChatGPTModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
