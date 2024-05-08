import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './create-customer.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @ApiProperty({description: 'first name of the customer',example: 'John Doe',})  
  @IsString()
  @IsOptional()
  first_name?: string;

  @ApiProperty({description: 'last name of the customer',example: 'johndoe123',})
  @IsString()
  @IsOptional()
  last_name?: string;

  @ApiProperty({description: 'pasport of the customer',example: 'password123',
  })
  @IsString()
  @IsOptional()
  pasport?: string;

  @ApiProperty({description: 'Email address of the customer',example: 'johndoe@example.com',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsOptional()
  @IsPhoneNumber('UZ') // Format: +998907777777
  @ApiProperty({type: String,description: "User's phone number (Uzbekistan format)",})
  phone_number?: string;


  @ApiProperty({type: String,description: "addres",})
  @IsOptional()
  addres?: string;


  @ApiProperty({type: String,description: "license number",})
  @IsOptional()
  license_number?: string;
}
