import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  { Document } from 'mongoose';

export type RolesDocument = Role & Document;
@Schema()
export class Role {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({type:Date,default:new Date()})
  createdAt:Date
  @Prop({type:Date,default:new Date()})
  updatedAt:Date
}
export const RolesSchema = SchemaFactory.createForClass(Role);
