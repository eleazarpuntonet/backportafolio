import { IsNotEmpty,  IsString, IsEmail,IsOptional, Min, IsPositive, ValidateIf, IsUrl, IsArray } from "class-validator";

export class CreateWorkDto {
    @IsString({message: 'El titulo debe ser un texto'})
    @IsNotEmpty({message: 'titulo es un campo requerido'})
    titulo: string

    @IsString({message: 'La descripcion debe ser un texto'})
    @IsNotEmpty({message: 'description es un campo requerido'})
    description: string

    @IsUrl({message: 'El campo debe ser una Url valida'})
    @IsNotEmpty({message: 'link es un campo requerido'})
    link: string

    @IsUrl({message: 'El code_link debe ser una Url valida'})
    @IsNotEmpty({message: 'code_link es un campo requerido'})
    code_link: string

    @IsNotEmpty({message: 'code_link es un campo requerido'})
    image: any

    @IsArray({message: 'El tags debe ser un arreglo valido'})
    tags: string[]
}
