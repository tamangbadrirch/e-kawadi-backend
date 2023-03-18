import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Role } from 'src/roles/entities/role.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, type: String })
  userType: string;

  @Prop({ required: true, type: String })
  firstName: string;

  @Prop({ required: true, type: String })
  lastName: string;

  @Prop({ required: true, type: String })
  phone: string;

  @Prop({ required: true, type: String })
  address: string;

  @Prop({ required: true, unique: true, type: String })
  username: string;

  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({
    type:mongoose.Schema.Types.ObjectId,
    ref:'Role'
  })
  roleId:Role
}

//User Schema Instance
export const UserSchema = SchemaFactory.createForClass(User);

/*list of mongo db data type
   String 
   Integer
   Double
   Boolean
   Array;
   etc...
*/
