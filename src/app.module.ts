import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { OrderStatusModule } from './order-status/order-status.module';
import { RolesModule } from './roles/roles.module';
import { ItemsModule } from './items/items.module';
import { CategoryModule } from './category/category.module';
import { ModulesModule } from './modules/modules.module';
import { RoleaccessModule } from './roleaccess/roleaccess.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guards';
import { APP_GUARD } from '@nestjs/core';

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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    //it will protect all the route
    // { provide: APP_GUARD, useClass: JwtAuthGuard }
  ],
})
export class AppModule {}
