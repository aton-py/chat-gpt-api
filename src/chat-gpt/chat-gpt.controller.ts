import { Controller, Post, Body } from '@nestjs/common';
import { ChatGPTService } from './chat-gpt.service';
import { CreateCompletionDto } from './dto/create-completion.dto';

@Controller('completion')
export class ChatGPTController {
  constructor(private readonly chatGPTService: ChatGPTService) {}

  @Post()
  async createCompletion(@Body() createCompletionDto: CreateCompletionDto) {
    return this.chatGPTService.createCompletion(createCompletionDto);
  }
}
