
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RolesDocument = Role & Document;
@Schema()
export class Role {
  @Prop({ required: true, type: String })
  name: string;

  //include createdAt and update at in all the schema as per er
  @Prop({type:Date,default:new Date()})
  createdAt:Date

  @Prop({type:Date,default:new Date()})
  updatedAt:Date
}


//Category Schema Instance
export const RolesSchema = SchemaFactory.createForClass(Role);

/*list of mongo db data type
   String 
   Integer
   Double
   Boolean
   Array;
   etc...
*/
