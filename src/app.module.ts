import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/entities/user.entity';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { OrderStatusModule } from './order-status/order-status.module';
import { RolesModule } from './roles/roles.module';
import { ItemsModule } from './items/items.module';
import { CategoryModule } from './category/category.module';
import { ModulesModule } from './modules/modules.module';
import { RoleaccessModule } from './roleaccess/roleaccess.module';

// @Module({
//   imports: [MongooseModule.forRoot('mongodb://localhost:27017/secondDB')],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/secondDB'),
    UsersModule,
    OrdersModule,
    PaymentsModule,
    OrderStatusModule,
    RolesModule,
    ItemsModule,
    CategoryModule,
    ModulesModule,
    RoleaccessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
