import { Inject, Injectable } from '@nestjs/common';
import { IDokkuProvider } from '../../../../shared/providers/DokkuProvider/IDokkuProvider';
import { INewCommitDTO } from '../../dtos/INewCommitDTO';

@Injectable()
export class NewCommitUseCase {
  constructor(@Inject(IDokkuProvider) private dokkuProvider: IDokkuProvider) {}

  async execute({ head_commit, repository }: INewCommitDTO) {
    const { added } = head_commit;

    const appExists = await this.dokkuProvider.getApp(repository.name);

    if (!appExists) {
      const containsDeployFile = added.find((file) => file === '.deploy');

      if (!containsDeployFile) return;

      await this.dokkuProvider.createApp({ name: repository.name });
    }

    await this.dokkuProvider.syncAppWithGit({
      git_url: repository.html_url,
      app_name: repository.name,
    });
  }
}
