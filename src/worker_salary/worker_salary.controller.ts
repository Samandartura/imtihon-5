import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkerSalaryService } from './worker_salary.service';
import { CreateWorkerSalaryDto } from './dto/create-worker_salary.dto';
import { UpdateWorkerSalaryDto } from './dto/update-worker_salary.dto';

@Controller('worker-salary')
export class WorkerSalaryController {
  constructor(private readonly workerSalaryService: WorkerSalaryService) {}

  @Post()
  create(@Body() createWorkerSalaryDto: CreateWorkerSalaryDto) {
    return this.workerSalaryService.create(createWorkerSalaryDto);
  }

  @Get()
  findAll() {
    return this.workerSalaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workerSalaryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkerSalaryDto: UpdateWorkerSalaryDto) {
    return this.workerSalaryService.update(+id, updateWorkerSalaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workerSalaryService.remove(+id);
  }
}
