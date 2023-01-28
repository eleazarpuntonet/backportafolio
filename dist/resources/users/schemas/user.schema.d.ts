import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User extends Document {
    email: string;
    nombre: string;
    password: string;
    role: string;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any>, any, any>;
