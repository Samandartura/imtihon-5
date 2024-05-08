import { Injectable } from '@nestjs/common';
import { CreateJarimaDto } from './dto/create-jarima.dto';
import { UpdateJarimaDto } from './dto/update-jarima.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Jarima } from './model/jarima.model';
import { JwtService } from '@nestjs/jwt';
import { transcode } from 'buffer';

@Injectable()
export class JarimaService {
  constructor(
    @InjectModel(Jarima) private jarimaRepo: typeof Jarima,
    private readonly jwtService: JwtService,
  ){}
  async create(createJarimaDto: CreateJarimaDto) {
    try {
      const jarima = await this.jarimaRepo.create(createJarimaDto)
      return jarima
    } catch (error) {
      throw new Error(`Error creating jarima ${error.message}`)
    }
  }

  async findAll() {
    try {
      const jarima = await this.jarimaRepo.findAll();
      if(!jarima || jarima.length ===0) return 'Empty'
      return jarima
    } catch (error) {
      throw new Error(`Error finding all jarima ${error.message}`)
    }
  }

  async findOne(id: number) {
    try {
      const jarima = await this.jarimaRepo.findByPk(id)
      if(!jarima) return 'Error'
      return jarima
    } catch (error) {
      throw new Error(`Error find jarima by id ${error.message}`)
    }
  }

  async update(id: number, updateJarimaDto: UpdateJarimaDto) {
    try {
      const [updatedRowsCount, [updatedjarima]] = await this.jarimaRepo.update(
        updateJarimaDto,
        {
          where:{id},
          returning:true
        }
      );
      if(updatedRowsCount === 0 ) return 'Empty'
      return updatedjarima
    } catch (error) {
      throw new Error(`Error updating jarima ${error.message}`)
    }
  }

  async remove(id: number) {
    try {
      const jarima =await this.jarimaRepo.destroy({where:{id}})
      if(jarima === 0) return 'Not Found'
      return 'successfully removed'
    } catch (error) {
      throw new Error(`Error removing jarima with id ${error.message}`)
    }
  }
}
