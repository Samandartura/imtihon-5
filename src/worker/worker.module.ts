import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { WorkerController } from './worker.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Worker } from './model/worker.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    SequelizeModule.forFeature([Worker]),
    JwtModule.register({}),
  ],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
