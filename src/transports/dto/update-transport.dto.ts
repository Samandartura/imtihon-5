import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTransportDto } from './create-transport.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTransportDto extends PartialType(CreateTransportDto) {
  @ApiProperty({description: 'transport number of the transport',example: '70 A 658 HD',})  
  @IsString()
  @IsOptional()
  transport_number?: string;

  @ApiProperty({description: 'transport type of the transport',example: 'yengil aftamobil',})  
  @IsString()
  @IsOptional()
  transport_type?: string;

  @ApiProperty({description: 'name of the transport',example: 'Mersedez benz',})  
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({description: 'color of the transport',example: 'white',})  
  @IsString()
  @IsOptional()
  color?: string;
}
