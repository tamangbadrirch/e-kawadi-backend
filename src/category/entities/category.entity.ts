import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true, type: String })
  category: string;
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
