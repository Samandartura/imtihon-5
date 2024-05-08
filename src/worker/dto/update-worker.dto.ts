import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateWorkerDto } from './create-worker.dto';
import { IsEmail, IsOptional, IsString, Matches } from 'class-validator';

export class UpdateWorkerDto extends PartialType(CreateWorkerDto) {
  @ApiProperty({
    description: 'full nameof the admin',
    example: 'johndoe123',
    required: false,
  })
  @IsOptional()
  @IsString()
  full_name?: string;

  @ApiProperty({
    description: 'Unique username of the admin',
    example: 'johndoe123',
    required: false,
  })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({
    description: 'Phone number of the admin',
    example: '+1234567890',
    required: false,
  })
  @IsOptional()
  @IsString()
  phone_number?: string;

  @ApiProperty({
    description: 'Email address of the admin',
    example: 'johndoe@example.com',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;
}
