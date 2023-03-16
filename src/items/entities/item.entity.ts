import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
export type ItemsDocument = Items & Document;

@Schema()
export class Items {

  @Prop({ required: true, type: Number })
  id: Number;

  @Prop({ required: true, type: String })
  userType: string;

  @Prop({ required: true, type: String })
  firstName: string;

  @Prop({ required: true, type: String })
  lastName: string;
  @Prop({ required: true, type: String })
  userName: string;
  @Prop({ required: true, type: String })
  email: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ required: true, type: String })
  phone: string;

  @Prop({ required: true, type: String })
  address: string;  

  @Prop({type:Date,default:new Date()})
  createdAt: Date;

  @Prop({type:Date,default:null})
  updatedAt: Date;

  //this field is our forign key
  @Prop({
    type:mongoose.Schema.Types.ObjectId,
    ref:'Roles'
  })
  roleId: number;
  }

//Items Schema Instance 
//varialbel name must be camel case
//interface must be Capital case just for convention
export const UsersSchema = SchemaFactory.createForClass(Users);

/*list of mongo db data type
   String 
   Integer
   Double
   Boolean
   Array;
   etc...
*/
