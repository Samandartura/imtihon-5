import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './model/payment.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment) private paymentRepo: typeof Payment,
    private readonly jwtService:JwtService,
  ){}

  async create(createPaymentDto: CreatePaymentDto) {
    try {
      const payment = await this.paymentRepo.create(createPaymentDto)
      return payment
    } catch (error) {
      throw new Error(`Error creating payment ${error.message}`)
    }
  }

  async findAll() {
    try {
      const payment = await this.paymentRepo.findAll()
      if(!payment || payment.length === 0) return 'Empty'
      return payment
    } catch (error) {
      throw new Error(`Error finding all payment ${error.message}`)
    }
  }

  async findOne(id: number) {
    try {
      const payment = await this.paymentRepo.findByPk(id)
      if(!payment) return 'Empty'
      return payment
    } catch (error) {
      throw new Error(`Error find payment with id ${id}: ${error.message}`)
    }
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    try {
      const [updatedRowsCount, [updatedPayment]] = await this.paymentRepo.update(
        updatePaymentDto,
        {
          where: { id },
          returning: true,
        },
      );
      if (updatedRowsCount === 0) return 'Empty';
      return updatedPayment;
    } catch (error) {
      throw new Error(`Error updating payment with id ${id}: ${error.message}`);
    }
  }

  async remove(id: number) {
    try {
      const paymentRows = await this.paymentRepo.destroy({ where: { id } });
      if (paymentRows === 0) return 'Not found';
      return 'successfully removed';
    } catch (error) {
      throw new Error(`Error removing payment with id ${id}: ${error.message}`);
    }
  }
}
