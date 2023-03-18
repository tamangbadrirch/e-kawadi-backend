import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Category } from 'src/category/entities/category.entity';
export type ItemsDocument = Items & Document;

@Schema()
export class Items {



  @Prop({ required: true, type: String })
  itemName: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId ,ref:'Category'})
  categoryId: Category;

  @Prop({type:Date,default:new Date()})
  createdAt: Date;

  @Prop({type:Date,default:null})
  updatedAt: Date;
}

//Items Schema Instance 
//varialbel name must be camel case
//interface must be Capital case just for convention
export const ItemsSchema = SchemaFactory.createForClass(Items);

/*list of mongo db data type
   String 
   Integer
   Double
   Boolean
   Array;
   etc...
*/
