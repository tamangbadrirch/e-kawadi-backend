import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Items } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';
import { OrderStatus } from 'src/order-status/entities/order-status.entity';
export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: String })
  category: string;
  @Prop({  type: Number })
  quantity: number;
  @Prop({  type: String })
  unit: string;
  @Prop({type:Date,default:new Date()})
  pickupDate:Date
  @Prop({type:String})
  pickupTime:string
  @Prop({ type: String })
  pickupLocation: string;
  @Prop({ type: String })
 paymentMethod: string;
//  @Prop({ required: true, type: Date })
//  orderDate: Date;
 @Prop({ type: String })
 orderStatus: string;
 @Prop({
  type:mongoose.Schema.Types.ObjectId,
  ref:'OrderStatus'
})
statusId: OrderStatus;

@Prop({
  type:mongoose.Schema.Types.ObjectId,
  ref:'Items'
})
itemsId: Items;

@Prop({
  type:mongoose.Schema.Types.ObjectId,
  ref:'User'
})
userId: User;

@Prop({type:Date,default:new Date()})
  createdAt: Date;
  @Prop({type:Date,default:null})
  updatedAt: Date;
}

//Category Schema Instance
export const OrderSchema = SchemaFactory.createForClass(Order);

/*list of mongo db data type
   String 
   Integer
   Double
   Boolean
   Array;
   etc...
*/


