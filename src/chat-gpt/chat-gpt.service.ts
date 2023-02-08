import { Injectable } from '@nestjs/common';
import { CreateCompletionDto } from './dto/create-completion.dto';
import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';

@Injectable()
export class ChatGPTService {
  private readonly openAIApi: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      organization: process.env.ORGANIZATION_ID,
      apiKey: process.env.OPENAI_API_KEY,
    });

    this.openAIApi = new OpenAIApi(configuration);
  }

  async createCompletion({
    question,
    model,
    temperature,
  }: CreateCompletionDto) {
    try {
      const params: CreateCompletionRequest = {
        prompt: question,
        model: model || 'text-davinci-003',
        temperature: temperature || 0.9,
      };
      const { data } = await this.openAIApi.createCompletion(params);

      return data;
    } catch (e) {
      throw new Error(e);
    }
  }
}
