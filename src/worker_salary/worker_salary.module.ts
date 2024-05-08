import { Module } from '@nestjs/common';
import { WorkerSalaryService } from './worker_salary.service';
import { WorkerSalaryController } from './worker_salary.controller';

@Module({
  controllers: [WorkerSalaryController],
  providers: [WorkerSalaryService],
})
export class WorkerSalaryModule {}
