import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Module } from 'src/Modules/entities/module.entity';
export type roleAccessDocument = roleAccess & Document;

@Schema()
export class roleAccess {
    
    // @Prop({ type: Number})
    // Id: number;
  
    @Prop({type:Number})
    roleId: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId ,ref:'Modules'})
    moduleId: Module;

}
