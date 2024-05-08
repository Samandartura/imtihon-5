import { Matches } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './model/customer.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private customerRepo: typeof Customer,
    private readonly jwtService:JwtService
  ){}

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      const customer = await this.customerRepo.create(createCustomerDto);
      return customer;
    } catch (error) {
      throw new Error(`Error creating admin: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const customer = await this.customerRepo.findAll();
      if (!customer || customer.length === 0) return 'Empty';
      return customer;
    } catch (error) {
      throw new Error(`Error finding all customer: ${error.message}`)
    }
  }

  async findOne(id: number) {
    const customer = await this.customerRepo.findByPk(id);
    if (!customer) return 'Empty';
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    try {
      const [updatedRowsCount, [updatedCustomer]] = await this.customerRepo.update(
        updateCustomerDto,
        {
          where: { id },
          returning: true,
        },
      );
      if (updatedRowsCount === 0) return 'Empty';
      return updateCustomerDto;
    } catch (error) {
      throw new Error(`Error updating customer with id ${id}: ${error.message}`);
    }
  }

  async remove(id: number) {
    try {
      const customrow = await this.customerRepo.destroy({ where: { id } });
      if (customrow === 0) return 'Not found';
      return 'successfully removed';
    } catch (error) {
      throw new Error(`Error removing customer with id ${id}: ${error.message}`);
    }
  }
}
