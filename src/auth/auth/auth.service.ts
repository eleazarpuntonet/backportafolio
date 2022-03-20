import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/resources/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/resources/users/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { PayloadToken } from '../schemas/token.interface';

@Injectable()
export class AuthService {
    constructor(
        public userService:UsersService,
        private jwtService: JwtService
    ){

    }

    async validateUser(email: string,pass : string){
        const user = await this.userService.findByEmail(email);
        if( typeof pass == 'number' ){
            let pass_ = +pass;
            pass = pass_.toString()
        }
        const isMatch = await bcrypt.compare(pass,user.password);

        if (isMatch) {
            const { password, ...rta } = user.toJSON();
            return rta;
        }
        return null
    }

    generateJWT(user: User) {
        const payload: PayloadToken = { 
            // role: user.role, 
            sub: user._id, 
            email: user.email 
        };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }      
}
