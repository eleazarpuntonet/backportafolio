import { IsNotEmpty,  IsString, IsEmail,IsOptional, Min, IsPositive, ValidateIf, IsUrl, IsArray } from "class-validator";


export class CreateElearningDto {
    @IsString({message: 'El titulo debe ser un texto'})
    @IsNotEmpty({message: 'titulo es un campo requerido'})
    titulo: string

    @IsString({message: 'La descripcion debe ser un texto'})
    @IsNotEmpty({message: 'description es un campo requerido'})
    description: string

    @IsNotEmpty({message: 'code_link es un campo requerido'})
    image: any
}
