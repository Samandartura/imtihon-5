import { Injectable } from '@nestjs/common';
import { CreateTransportDto } from './dto/create-transport.dto';
import { UpdateTransportDto } from './dto/update-transport.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Transport } from './model/transport.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TransportsService {
  constructor(
    @InjectModel(Transport) private transRepo : typeof Transport,
    private readonly jwtService:JwtService
  ){}
  async create(createTransportDto: CreateTransportDto) {
    try {
      const trans = await this.transRepo.create(createTransportDto)
      return trans
    } catch (error) {
      throw new Error(`Error create transport ${error.message}`)
    }
  }

  async findAll() {
    try {
      const trans = await this.transRepo.findAll()
      if(!trans || trans.length ===0) return 'Empty'
      return trans
    } catch (error) {
      throw new Error(`Error finding transports`)
    }
  }

  async findOne(id: number) {
    try {
      const trans = await this.transRepo.findByPk(id)
      if(!trans) return 'Empty'
      return trans
    } catch (error) {
      throw new Error(`Error find a transport ${id}:${error.message}`)
    }
  }

  async update(id: number, updateTransportDto: UpdateTransportDto) {
    try {
      const [updateRows, [updatedtrans]] = await this.transRepo.update(updateTransportDto,{where:{id},returning:true});
      if(updateRows === 0) return 'Empty'
      return updatedtrans
    } catch (error) {
      throw new Error(`Error updating transport with id ${id}: ${error.message}`)
    }
  }

  async remove(id: number) {
    try {
      const transRow = await this.transRepo.destroy({where:{id}})
      if(transRow === 0) return 'Not Found'
      return 'Successfully removed'
    } catch (error) {
      throw new Error(`Error removing transport with id ${id}: ${error.message}`)
    }
   ;
  }
}
