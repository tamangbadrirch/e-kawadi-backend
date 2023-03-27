import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import {roleAccess } from 'src/roleaccess/entities/roleaccess.entity';

export type RolesDocument = Role & Document;
@Schema()
export class Role {
  @Prop({ required: true, type: String })
  role: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId ,ref:'roleAccess'}) //foreign key
  roleAccessid: roleAccess;
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
