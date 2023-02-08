import { Test, TestingModule } from '@nestjs/testing';
import { ChatGPTService } from '../chat-gpt.service';
import { ChatGPTModule } from '../chat-gpt.module';
import { ConfigModule } from '@nestjs/config';

describe('ChatGPTService', () => {
  let service: ChatGPTService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatGPTService],
      imports: [ChatGPTModule, ConfigModule.forRoot()],
    }).compile();

    service = module.get<ChatGPTService>(ChatGPTService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should forecast properly', async () => {
    const response = await service.createCompletion({
      question: 'roses are red',
    });

    expect(response.choices[0]).not.toBeNull();
  });

  it('should throw error', async () => {
    try {
      await service.createCompletion({ question: '' });
    } catch (e) {
      expect(service).toThrowError(e);
    }
  });
});
