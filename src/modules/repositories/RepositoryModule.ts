import { Module } from '@nestjs/common';
import { NewRepositoryController } from './useCases/newRepository/NewRepositoryController';
import { NewRepositoryUseCase } from './useCases/newRepository/NewRepositoryUseCase';
import { IDokkuProvider } from '../../shared/providers/DokkuProvider/IDokkuProvider';
import { DokkuAPIProvider } from '../../shared/providers/DokkuProvider/implementations/DokkuAPIProvider';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [NewRepositoryController],
  providers: [
    NewRepositoryUseCase,
    { provide: IDokkuProvider, useClass: DokkuAPIProvider },
  ],
})
export class RepositoryModule {}
