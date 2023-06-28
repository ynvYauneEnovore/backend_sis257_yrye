import { PartialType } from '@nestjs/swagger';
import { CreateCatProductoDto } from './create-catproducto.dto';

export class UpdateCatProductoDto extends PartialType(CreateCatProductoDto) {}
