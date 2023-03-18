import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true, type: Number })
  id: Number;

  @Prop({ required: true, type: Number })
  category: string;

  @Prop({ required: true, type: Number })
  items: string;

  @Prop({ required: true, type: Number })
  qty: number;

  @Prop({ required: true, type: Number })
  unit: string;

  @Prop({type:Date,default:new Date()})
  pickupDate:Date

  @Prop({type:Date,default:new Date()})
  pickupTIme:Date

  @Prop({ required: true, type: String })
 paymentMethod: string;

 @Prop({ required: true, type: String })
 orderBy: string;

 @Prop({ required: true, type: String })
 orderStatus: string;

  @Prop({ required: true, type: String })
  pickupLocation: string;

 @Prop({
  type:mongoose.Schema.Types.ObjectId,
  ref:'Status'
})
statusId: Number;
}

@Prop({
  type:mongoose.Schema.Types.ObjectId,
  ref:'Items'
})
itemsId: Number;
}

@Prop({
  type:mongoose.Schema.Types.ObjectId,
  ref:'User'
})
userId: Number;
}

//include createdAt and update at in all the schema as per er
 @Prop({type:Date,default:new Date()})
  createdAt:Date;

  @Prop({type:Date,default:new Date()})
  updatedAt:Date;
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


