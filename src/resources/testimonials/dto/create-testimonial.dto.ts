import { IsNotEmpty,  IsString, IsEmail,IsOptional, Min, IsPositive, ValidateIf, IsUrl, IsArray } from "class-validator";


export class CreateTestimonialDto {
    @IsString({message: 'El nombre debe ser un texto'})
    @IsNotEmpty({message: 'nombre es un campo requerido'})
    nombre: string
    
    @IsString({message: 'El company debe ser un texto'})
    @IsNotEmpty({message: 'company es un campo requerido'})
    company: string

    @IsNotEmpty({message: 'image es un campo requerido'})
    image: any;

    @IsString({message: 'El feedback debe ser un texto'})
    @IsNotEmpty({message: 'feedback es un campo requerido'})
    feedback: string

}
