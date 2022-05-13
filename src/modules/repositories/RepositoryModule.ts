import { Module } from '@nestjs/common';
import { IDokkuProvider } from '../../shared/providers/DokkuProvider/IDokkuProvider';
import { DokkuAPIProvider } from '../../shared/providers/DokkuProvider/implementations/DokkuAPIProvider';
import { ConfigModule } from '@nestjs/config';
import { NewCommitController } from './useCases/newCommit/NewCommitController';
import { NewCommitUseCase } from './useCases/newCommit/NewCommitUseCase';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [NewCommitController],
  providers: [
    NewCommitUseCase,
    { provide: IDokkuProvider, useClass: DokkuAPIProvider },
  ],
})
export class RepositoryModule {}
