import { Module } from '@nestjs/common';
import { TransportsService } from './transports.service';
import { TransportsController } from './transports.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transport } from './model/transport.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    SequelizeModule.forFeature([Transport]),
    JwtModule.register({})
  ],
  controllers: [TransportsController],
  providers: [TransportsService],
})
export class TransportsModule {}
