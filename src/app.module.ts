import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminModule } from './admin/admin.module';
import { WorkerModule } from './worker/worker.module';
import { WorkerSalaryModule } from './worker_salary/worker_salary.module';
import { ObjectModule } from './object/object.module';
import { TransportsModule } from './transports/transports.module';
import { CustomerModule } from './customer/customer.module';
import { PaymentModule } from './payment/payment.module';
import { JarimaModule } from './jarima/jarima.module';
import { Admin } from './admin/model/admin.model';


@Module({
  imports: [ConfigModule.forRoot({envFilePath:'.env',isGlobal:true}),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: String(process.env.POSTGRES_PASSWORD),
    database: process.env.POSTGRES_DB,
    models: [__dirname + 'dist/**/*.model{.ts, .js}'],
    autoLoadModels: true,
    logging: false,
  }),
  AdminModule,
  WorkerModule,
  WorkerSalaryModule,
  ObjectModule,
  TransportsModule,
  CustomerModule,
  PaymentModule,
  JarimaModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
