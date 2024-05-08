import { Injectable } from '@nestjs/common';
import { CreateWorkerSalaryDto } from './dto/create-worker_salary.dto';
import { UpdateWorkerSalaryDto } from './dto/update-worker_salary.dto';

@Injectable()
export class WorkerSalaryService {
  create(createWorkerSalaryDto: CreateWorkerSalaryDto) {
    return 'This action adds a new workerSalary';
  }

  findAll() {
    return `This action returns all workerSalary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workerSalary`;
  }

  update(id: number, updateWorkerSalaryDto: UpdateWorkerSalaryDto) {
    return `This action updates a #${id} workerSalary`;
  }

  remove(id: number) {
    return `This action removes a #${id} workerSalary`;
  }
}
