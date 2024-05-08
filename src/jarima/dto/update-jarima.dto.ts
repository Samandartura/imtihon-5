import { PartialType } from '@nestjs/swagger';
import { CreateJarimaDto } from './create-jarima.dto';

export class UpdateJarimaDto extends PartialType(CreateJarimaDto) {}
