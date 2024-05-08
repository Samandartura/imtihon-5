import { ApiProperty } from '@nestjs/swagger';
import { Table, Model,Column,DataType,ForeignKey } from 'sequelize-typescript';
import { Payment } from '../../payment/model/payment.model';

interface jarimaCreationAttr{
  jarima_hodisa:string;
  jarima_vaqti:string;
  jarima_kuni:number;
  transport_id:number
  jarima_narxi:string;
  payment_id:number

}

@Table({tableName:"jarima"})
export class Jarima extends Model<Jarima,jarimaCreationAttr> {
  @ApiProperty({description: 'Admin ID',required: false,})
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({description: 'jarima hodisasi of the jarima',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  jarima_hodisa: string;

  @ApiProperty({description: 'jarima_vaqti of the jarima',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  jarima_vaqti: string;

  @ApiProperty({description: 'jarima kuni of the jarima',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  jarima_kuni: number;

  @ApiProperty({description: 'jarima narxi of the jarima',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  jarima_narxi: string;

  // @ForeignKey(() => Payment)
  @Column({ type: DataType.INTEGER, allowNull: false })
  @ApiProperty({ description: 'ID of the payment', example: 1 })
  paymentId: number;
}
