import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Injectable()
export class VentaService {
  create(createCancionDto: CreateVentaDto) {
    return 'This action adds a new cancion';
  }

  findAll() {
    return `This action returns all cancion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cancion`;
  }

  update(id: number, updateCancionDto: UpdateVentaDto) {
    return `This action updates a #${id} cancion`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancion`;
  }
}
