import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import {Order} from 'src/orders/entities/order.entity';
export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  @Prop({ required: true, type: String })
  paidTo: string;

  @Prop({type:Date,default:new Date()})
  paidDate: Date;

  @Prop({ required: true, type: Number })
  totalPayment: Number;

  @Prop({ required: true, type: String })
  paymentMethod: string;

  @Prop({ required: true, type: String })
  paymentStatus: string;

  @Prop({ required: true, type: String })
  paymentSlip: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId ,ref:'Order'}) //foreign key
 orderid: Order;

  @Prop({type:Date,default:new Date()})
  createdAt: Date;

  @Prop({type:Date,default:null})
  updatedAt: Date;
  }

//Items Schema Instance 
//varialbel name must be camel case
//interface must be Capital case just for convention
export const PaymentSchema = SchemaFactory.createForClass(Payment);

/*list of mongo db data type
   String 
   Integer
   Double
   Boolean
   Array;
   etc...
*/

