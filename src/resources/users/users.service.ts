import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor (@Inject('USERS_MODEL') private usersModel: Model<UserDocument>){

  }

  async create(createUserDto: CreateUserDto) {
    const newUser      = new this.usersModel(createUserDto)
    const hashPassword = await bcrypt.hash(newUser.password, 10)
    newUser.password   = hashPassword
    const model        = await newUser.save()

    const { password,...obj } = model.toJSON()
    return obj
  }

  async findAll(params?): Promise<User[]> {
    if(params){
      const { limit, offset } = params
      return await this.usersModel.find().skip(offset).limit(limit).exec()
    }
    return await this.usersModel.find().exec()
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersModel.findById(id)

    if(!user)
      throw new NotFoundException(`Usuario ${id} no encontrado`)

    return user;
  }


  async findByEmail(email: string): Promise<User> {
    const user = await this.usersModel.findOne({ email:email }).exec()

    if(!user)
      throw new NotFoundException(`${email} no encontrado`)

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersModel.findByIdAndUpdate(id,updateUserDto,{ new: true })

    if(!user)
      throw new NotFoundException(`El usuario ${id} no fue encontrado`)

    return user
  }

  remove(id: string) {
    return this.usersModel.findByIdAndDelete(id)
  }
}
