import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, DataType, Model } from 'sequelize-typescript';


interface WorkerCreationAttr {
  full_name: string;
  username: string;
  phone_number: string;
  email: string;
  password: string;

}
@Table({tableName:"worker"})
export class Worker extends Model<Worker,WorkerCreationAttr> {
  @ApiProperty({description:"id",required:false,})
  @Column({
    primaryKey:true,
    autoIncrement:true
  })
  id:number

  @ApiProperty({description: 'Full name of the worker',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @ApiProperty({description: 'Unique username of the worker',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
    })
  username: string;

  @ApiProperty({description: 'Phone number of the worker',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @ApiProperty({description: 'Email address of the worker',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
    // unique: true,
  })
  email: string;

  @ApiProperty({description: 'Hashed password of the worker',})
  @Column({
    type: DataType.STRING,
  })
  password: string;


  @ApiProperty({description: 'Flag indicating if the worker is active',default: false,})
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;
}
