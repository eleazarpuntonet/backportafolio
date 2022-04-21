import { IsNotEmpty,  IsString, IsEmail,IsOptional, Min, IsPositive, ValidateIf, IsUrl, IsArray } from "class-validator";

export class CreateWorkDto {
    @IsString({message: 'El titulo debe ser un texto'})
    @IsNotEmpty({message: 'titulo es un campo requerido'})
    titulo: string

    @IsString({message: 'La descripcion debe ser un texto'})
    @IsNotEmpty({message: 'description es un campo requerido'})
    description: string

    // @IsUrl({message: 'El campo debe ser una Url valida'})
    link: string

    @IsUrl({message: 'El code_link debe ser una Url valida'})
    code_link: string

    image: string

    // @IsArray({message: 'El tags debe ser un arreglo valido'})
    tags: string[]

    @IsNotEmpty()
    lang: string
}
