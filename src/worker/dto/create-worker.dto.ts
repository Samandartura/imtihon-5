import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateWorkerDto {
  @ApiProperty({description: 'Full name of the worker',example: 'John Doe',})  
  @IsString()
  full_name: string;

  @ApiProperty({description: 'username of the worker',example: 'password123',
  })
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsPhoneNumber('UZ') // Format: +998907777777
  @ApiProperty({type: String,description: "User's phone number (Uzbekistan format)",})
  phone_number: string;

  @ApiProperty({description: 'Email address of the worker',example: 'johndoe@example.com',
  })
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  @ApiProperty({type: String,description: "password",})
  password: string;
  
}
