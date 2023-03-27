import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ModuleDocument = Module & Document;

@Schema()
export class Module {
    @Prop({ required:true, type: String })
    moduleName: string;
}
export const ModuleSchema = SchemaFactory.createForClass(Module);