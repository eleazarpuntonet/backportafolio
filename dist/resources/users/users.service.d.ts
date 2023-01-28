/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, User } from './schemas/user.schema';
export declare class UsersService {
    private usersModel;
    constructor(usersModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<{
        nombre: string;
        email: string;
        role: string;
        _id: any;
        __v?: any;
        id?: any;
    }>;
    findAll(params?: any): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): import("mongoose").Query<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, UserDocument>;
}
