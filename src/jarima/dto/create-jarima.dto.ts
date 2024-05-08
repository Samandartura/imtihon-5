import { IsString } from "class-validator";

export class CreateJarimaDto {
  @IsString()
  readonly jarima_hodisa:string;

  @IsString()
  readonly jarima_vaqti:string;

  @IsString()
  readonly jarima_kuni:number;

  @IsString()
  readonly jarima_narxi:string;


}
