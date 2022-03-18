import { PartialType } from '@nestjs/mapped-types';
import { CreateElearningDto } from './create-elearning.dto';

export class UpdateElearningDto extends PartialType(CreateElearningDto) {}
