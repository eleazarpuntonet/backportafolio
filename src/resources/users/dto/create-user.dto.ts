import { IsNotEmpty,  IsString, IsEmail,IsOptional, Min, IsPositive, ValidateIf } from "class-validator";

export class CreateUserDto {
    @IsString({message: 'El nombre debe ser un texto'})
    @IsNotEmpty({message: 'nombre es un campo requerido'})
    nombre: string

    @IsString({message: 'Email debe ser un campo de texto'})
    @IsNotEmpty({message: 'Email es un campo requerido'})
    @IsEmail()
    email: string

    @IsNotEmpty({message: 'Password es un campo requerido'})
    @IsString()
    password: string

    @IsNotEmpty({message: 'Role es un campo requerido'})
    role: string
}
