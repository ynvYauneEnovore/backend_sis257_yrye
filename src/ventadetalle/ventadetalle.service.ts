import { Injectable } from '@nestjs/common';
import { CreateVentaDetalleDto } from './dto/create-ventadetalle.dto';
import { UpdateVentaDetalleDto } from './dto/update-ventadetalle.dto';

@Injectable()
export class VentaDetalleService {
  create(createCancionDto: CreateVentaDetalleDto) {
    return 'This action adds a new cancion';
  }

  findAll() {
    return `This action returns all cancion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cancion`;
  }

  update(id: number, updateCancionDto: UpdateVentaDetalleDto) {
    return `This action updates a #${id} cancion`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancion`;
  }
}
