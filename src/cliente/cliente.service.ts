import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  create(createClienteDto: CreateClienteDto) {
    return 'Esta acción añade una nueva canción.';
  }

  findAll() {
    return `Esta acción devuelve toda la canción.`;
  }

  findOne(id: number) {
    return `Esta acción devuelve una canción por #${id}`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cancion`;
  }

  remove(id: number) {
    return `Esta acción elimina una canción #${id}`;
  }
}
