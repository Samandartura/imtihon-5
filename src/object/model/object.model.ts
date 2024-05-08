import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, DataType, Column } from 'sequelize-typescript';

interface objectAttr{
  name:string
  location:string
  tg_link:string
  phone_number:string
  city:string
  district:string
  address:string
}

@Table({tableName:"object"})
export class Objects extends Model<Objects,objectAttr> {
  @ApiProperty({description: 'Object ID',required: false,})
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({description: 'name of the admin',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
