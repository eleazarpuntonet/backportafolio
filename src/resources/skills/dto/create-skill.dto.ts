import { IsNotEmpty,  IsString, IsEmail,IsOptional, Min, IsPositive, ValidateIf, IsUrl, IsArray } from "class-validator";


export class CreateSkillDto {
    @IsString({message: 'El titulo debe ser un texto'})
    @IsNotEmpty({message: 'titulo es un campo requerido'})
    titulo: string

    @IsString({message: 'La descripcion debe ser un texto'})
    @IsNotEmpty({message: 'description es un campo requerido'})
    description: string

    image: any
}
