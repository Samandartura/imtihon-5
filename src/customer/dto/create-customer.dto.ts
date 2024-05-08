import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";


export class CreateCustomerDto {
  @ApiProperty({description: 'first name of the customer',example: 'John Doe',})  
  @IsString()
  first_name: string;

  @ApiProperty({description: 'last name of the customer',example: 'johndoe123',})
  @IsString()
  last_name: string;

  @ApiProperty({description: 'pasport of the customer',example: 'password123',
  })
  @IsString()
  pasport: string;

  @ApiProperty({description: 'Email address of the customer',example: 'johndoe@example.com',
  })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber('UZ') // Format: +998907777777
  @ApiProperty({type: String,description: "User's phone number (Uzbekistan format)",})
  phone_number: string;


  @ApiProperty({type: String,description: "addres",})
  addres: string;


  @ApiProperty({type: String,description: "license number",})
  license_number: string;
}
