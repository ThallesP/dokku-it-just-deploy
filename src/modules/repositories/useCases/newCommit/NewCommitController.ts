import { Body, Controller, Post } from '@nestjs/common';
import { INewCommitDTO } from '../../dtos/INewCommitDTO';
import { NewCommitUseCase } from './NewCommitUseCase';

@Controller()
export class NewCommitController {
  constructor(private newCommitUseCase: NewCommitUseCase) {}

  @Post()
  async handle(@Body() newCommitDTO: INewCommitDTO) {
    await this.newCommitUseCase.execute(newCommitDTO);
  }
}
