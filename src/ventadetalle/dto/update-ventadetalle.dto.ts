import { PartialType } from '@nestjs/swagger';
import { CreateVentaDetalleDto } from './create-ventadetalle.dto';

export class UpdateVentaDetalleDto extends PartialType(CreateVentaDetalleDto) {}
