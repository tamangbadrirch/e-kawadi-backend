import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true, type: Number })
  id: Number;

  @Prop({ required: true, type: String })
  category: string;


  //include createdAt and update at in all the schema as per er
  @Prop({type:Date,default:new Date()})
  createdAt:Date

  @Prop({type:Date,default:new Date()})
  updatedAt:Date
}

//Category Schema Instance
export const CategorySchema = SchemaFactory.createForClass(Category);

/*list of mongo db data type
   String 
   Integer
   Double
   Boolean
   Array;
   etc...
*/
