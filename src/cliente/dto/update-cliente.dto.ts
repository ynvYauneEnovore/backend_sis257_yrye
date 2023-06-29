import { PartialType } from '@nestjs/swagger';
import { CreateVentaDto } from './create-cliente.dto';

export class UpdateVentaDto extends PartialType(CreateVentaDto) {}
