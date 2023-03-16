import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true, type: Number })
  id: Number;

  @Prop({type:Date,default:new Date()})
  orderDate:Date

  @Prop({ required: true, type: String })
  orderBy: string;

  @Prop({ required: true, type: String })
  orderStatus: string;

  @Prop({ required: true, type: Number })
 statusId  : Number;

 @Prop({
  type:mongoose.Schema.Types.ObjectId,
  ref:'Payment'
})
paymentId: number;
}

 @Prop({ required: true, type: Number })
 itemsId  : Number;

 @Prop({ required: true, type: Number })
 userId  : Number;

  //include createdAt and update at in all the schema as per er
 @Prop({type:Date,default:new Date()})
  createdAt:Date

  @Prop({type:Date,default:new Date()})
  updatedAt:Date
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


