import { Test, TestingModule } from '@nestjs/testing';
import { ChatGPTController } from '../chat-gpt.controller';
import { ChatGPTService } from '../chat-gpt.service';

describe('ChatGPTController', () => {
  let controller: ChatGPTController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatGPTController],
      providers: [ChatGPTService],
    }).compile();

    controller = module.get<ChatGPTController>(ChatGPTController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
