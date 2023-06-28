import { PartialType } from '@nestjs/swagger';
import { CreateCancionDto } from './create-producto.dto';

export class UpdateCancionDto extends PartialType(CreateCancionDto) {}
