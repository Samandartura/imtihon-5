import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Worker } from './model/worker.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class WorkerService {
  constructor(
    @InjectModel(Worker) private workerRepo: typeof Worker,
    private readonly jwtService: JwtService
  ){}
  async create(createWorkerDto: CreateWorkerDto) {
    try {
      const worker = await this.workerRepo.create(createWorkerDto)
      return worker
    } catch (error) {
      throw new Error(`Error creating admin: ${error.message}`); 
    }
    
  }

  async findAll() {
    try {
      const worker = await this.workerRepo.findAll()
      if(!worker || worker.length === 0) return 'Empty'
      return worker
    } catch (error) {
      throw new Error(`Error finding workers ${error.message}`)
    }
  }

  findOne(id: number) {
    try {
      
    } catch (error) {
      
    }
    return `This action returns a #${id} worker`;
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return `This action updates a #${id} worker`;
  }

  remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}
