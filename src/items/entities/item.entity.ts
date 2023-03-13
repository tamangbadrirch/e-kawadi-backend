import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemsDocument = Items & Document;

@Schema()
export class Items {
  @Prop({ required: true, type: String })
  categoryName: string;

  @Prop({ required: true, type: String })
  items: string;
  }

//Items Schema Instance
export const ItemsSchema = SchemaFactory.createForClass(Items);

/*list of mongo db data type
   String 
   Integer
   Double
   Boolean
   Array;
   etc...
*/
