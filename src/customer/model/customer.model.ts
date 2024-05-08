import { ApiProperty } from '@nestjs/swagger';
import { Table, DataType,Model,Column } from 'sequelize-typescript';

interface CustomerCreationAttr{
  first_name: string;
  last_name: string;
  pasport: string;
  email: string;
  phone_number: string;
  addres: string;
  license_number: string;
}
@Table({tableName:"Customer"})
export class Customer extends Model<Customer,CustomerCreationAttr> {
  @ApiProperty({description: 'customer ID',required: false,})
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({description: 'first name of the customer',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @ApiProperty({description: 'last name of the customer',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @ApiProperty({description: ' pasport of the customer',})
  @Column({
    type: DataType.STRING,
    })
  pasport: string;

  @ApiProperty({description: 'Phone number of the customer',})
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  
  @ApiProperty({description: 'address of the customer',})
  @Column({
    type: DataType.STRING,
    // unique: true,
  })
  addres: string;

  @ApiProperty({description: 'license of the customer',})
  @Column({
    type: DataType.STRING,
  })
  license_number: string;
}

