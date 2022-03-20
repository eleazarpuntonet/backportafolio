import { IsNotEmpty,  IsString, IsEmail,IsOptional, Min, IsPositive, ValidateIf, IsUrl, IsArray } from "class-validator";


export class CreateWorkexperienceDto {

    @IsString({message: 'El nombre debe ser un texto'})
    @IsNotEmpty({message: 'nombre es un campo requerido'})
    nombre: string

    @IsString({message: 'El cargo debe ser un texto'})
    @IsNotEmpty({message: 'cargo es un campo requerido'})
    cargo: string
    
    @IsString({message: 'El cargo debe ser un texto'})
    @IsNotEmpty({message: 'description es un campo requerido'})
    description: string
    
    @IsString({message: 'start debe ser un texto'})
    @IsNotEmpty({message: 'start es un campo requerido'})
    start: string
    
    @IsString({message: 'end debe ser un texto'})
    end: string

}
