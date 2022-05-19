export interface ICreateApp {
  name: string;
}

export interface IApp {
  name: string;
}

export interface ISyncAppWithGit {
  git_url: string;
  app_name: string;
  ref: string;
}

export interface IDokkuProvider {
  createApp({ name }: ICreateApp): Promise<IApp>;
  getApp(name: string): Promise<IApp>;
  syncAppWithGit({ git_url, app_name }: ISyncAppWithGit): Promise<void>;
}

export const IDokkuProvider = Symbol('IDokkuProvider');
