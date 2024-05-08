import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './model/customer.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Customer]),
    JwtModule.register({})
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
