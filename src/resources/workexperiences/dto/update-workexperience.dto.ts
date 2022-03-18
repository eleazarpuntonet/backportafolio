import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkexperienceDto } from './create-workexperience.dto';

export class UpdateWorkexperienceDto extends PartialType(CreateWorkexperienceDto) {}
