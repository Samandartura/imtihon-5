import { Module } from '@nestjs/common';
import { JarimaService } from './jarima.service';
import { JarimaController } from './jarima.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Jarima } from './model/jarima.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    SequelizeModule.forFeature([Jarima]),
    JwtModule.register({})
  ],
  controllers: [JarimaController],
  providers: [JarimaService],
})
export class JarimaModule {}
