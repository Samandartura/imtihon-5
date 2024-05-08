import { PartialType } from '@nestjs/swagger';
import { CreateWorkerSalaryDto } from './create-worker_salary.dto';

export class UpdateWorkerSalaryDto extends PartialType(CreateWorkerSalaryDto) {}
