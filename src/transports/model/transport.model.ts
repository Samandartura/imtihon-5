import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, DataType, Model } from 'sequelize-typescript';

interface TransportAttr{
  transport_number:string
  customer_id:number;
  transport_type:string
  name:string
  color:string
}

@Table({tableName:"transport"})
export class Transport extends Model<Transport,TransportAttr>{
  @ApiProperty({description:'transport id',required:false,})
  @Column({
    type: DataType.INTEGER,
    primaryKey:true,
    autoIncrement:true
  })
  id: number

  @ApiProperty({description: 'transport number of the transport',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  transport_number: string;

  @ApiProperty({description: 'transport type of the transport',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  transport_type: string;

  @ApiProperty({description: ' name of the transport',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({description: 'color of the transport',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;
}
