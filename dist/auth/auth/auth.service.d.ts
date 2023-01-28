import { UsersService } from 'src/resources/users/users.service';
import { User } from 'src/resources/users/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    userService: UsersService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<{
        nombre: string;
        email: string;
        role: string;
        _id?: any;
        __v?: any;
        id?: any;
    }>;
    generateJWT(user: User): {
        access_token: string;
        user: User;
    };
}
