// }
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
export type OrderStatusDocument = OrderStatus & Document;

@Schema()
export class OrderStatus {
  @Prop({ required: true, type: Number })
  id: Number;

//   @Prop({
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'OrderStatus'
//   })
//   statusId: number;

  @Prop({ required: true, type: String })
  orderStatus: string;

  @Prop({type:Date,default:new Date()})
  createdAt: Date;

  @Prop({type:Date,default:null})
  updatedAt: Date;
  }

//Items Schema Instance 
//varialbel name must be camel case
//interface must be Capital case just for convention
export const OrderStatusSchema = SchemaFactory.createForClass(OrderStatus);

/*list of mongo db data type
   String 
   Integer
   Double
   Boolean
   Array;
   etc...
*/

