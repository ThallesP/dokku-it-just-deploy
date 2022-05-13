import {
  IApp,
  ICreateApp,
  IDokkuProvider,
  ISyncAppWithGit,
} from '../IDokkuProvider';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DokkuAPIProvider implements IDokkuProvider {
  private client: AxiosInstance;

  constructor(private configService: ConfigService) {
    this.client = axios.create({
      baseURL: configService.get('DOKKU_API_URL'),
      headers: {
        Authorization: `token ${configService.get('DOKKU_API_TOKEN')}`,
      },
    });
  }

  async createApp({ name }: ICreateApp): Promise<IApp> {
    const { data } = await this.client.post<IApp>('/apps', { name });

    return data;
  }

  async getApp(name: string): Promise<IApp> {
    const { data } = await this.client.get<IApp>(`/apps/${name}`);

    return data;
  }

  async syncAppWithGit({ git_url, app_name }: ISyncAppWithGit): Promise<void> {
    await this.client.put(`/apps/${app_name}/git`, { git_url });
  }
}
