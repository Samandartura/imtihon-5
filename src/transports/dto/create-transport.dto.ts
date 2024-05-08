import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTransportDto {
  @ApiProperty({description: 'transport number of the transport',example: '70 A 658 HD',})  
  @IsString()
  transport_number: string;

  @ApiProperty({description: 'transport type of the transport',example: 'yengil aftamobil',})  
  @IsString()
  transport_type: string;

  @ApiProperty({description: 'name of the transport',example: 'Mersedez benz',})  
  @IsString()
  name: string;

  @ApiProperty({description: 'color of the transport',example: 'white',})  
  @IsString()
  color: string;

}
