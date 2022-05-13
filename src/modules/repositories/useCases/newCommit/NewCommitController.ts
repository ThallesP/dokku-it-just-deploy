import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { INewCommitDTO } from '../../dtos/INewCommitDTO';
import { NewCommitUseCase } from './NewCommitUseCase';
import { RestrictRouteByEventGuard } from '../../../../shared/infra/nestjs/guards/RestrictRouteByEventGuard';

@Controller()
@UseGuards(new RestrictRouteByEventGuard('push'))
export class NewCommitController {
  constructor(private newCommitUseCase: NewCommitUseCase) {}

  @Post()
  async handle(@Body() newCommitDTO: INewCommitDTO) {
    await this.newCommitUseCase.execute(newCommitDTO);
  }
}
