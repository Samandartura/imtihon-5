import { ApiProperty } from '@nestjs/swagger';
import { Table, Model,DataType,Column, } from 'sequelize-typescript';


interface paymentAttr{
  payment_type:string
  customer_id:number
  transport_id:number
  payment_date:string 
}

@Table({tableName:"payment"})
export class Payment extends Model<Payment,paymentAttr>{

  @ApiProperty({description: 'payment ID',required: false,})
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({description: 'payment type of the payment',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  payment_type: string;

  @ApiProperty({description: 'payment_date of the payment',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  payment_date: string;
}


