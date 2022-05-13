import { Module } from '@nestjs/common';
import { RepositoryModule } from './modules/repositories/RepositoryModule';

@Module({
  imports: [RepositoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
