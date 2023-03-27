import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Module } from 'src/modules/entities/module.entity';
export type roleAccessDocument = RoleAccess & Document;

@Schema()
export class RoleAccess {
      
    @Prop({type:Number})
    roleId: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId ,ref:'Modules'})
    moduleId: Module;

    @Prop({type:Date,default:new Date()})
    createdAt:Date

    @Prop({type:Date})
    updatedAt:Date
}

export const moduleSchema=SchemaFactory.createForClass(RoleAccess)
