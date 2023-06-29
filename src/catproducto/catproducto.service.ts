import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatProductoDto } from './dto/create-catproducto.dto';
import { UpdateCatProductoDto } from './dto/update-catproducto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CatProductoEntity } from './entities/catproducto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatProductoService {
  constructor(
    @InjectRepository(CatProductoEntity)
    private catproductoRepository: Repository<CatProductoEntity>,
  ) {}

  async create(
    createCatProductoDto: CreateCatProductoDto,
  ): Promise<CatProductoEntity> {
    const existe = await this.catproductoRepository.findOneBy({
      nombre: createCatProductoDto.nombre.trim(),
    });

    if (existe) {
      throw new ConflictException(`El género ${createCatProductoDto.nombre} ya existe.`);
    }

    return this.catproductoRepository.save({
      nombre: createCatProductoDto.nombre.trim(),
    });
  }

  async findAll(): Promise<CatProductoEntity[]> {
    return this.catproductoRepository.find();
  }

  async findOne(id: number): Promise<CatProductoEntity> {
    const catproducto = await this.catproductoRepository.findOneBy({id});

    if (!catproducto) {
      throw new NotFoundException(`El género ${id} no existe.`);
    }

    return catproducto;
  }

  async update(id: number, updateCatProductoDto: UpdateCatProductoDto) {
    const catproducto = await this.catproductoRepository.findOneBy({id});

    if (!catproducto) {
      throw new NotFoundException(`El género ${id} no existe.`);
    }

    const catproductoUpdate = Object.assign(catproducto, updateCatProductoDto);
    return this.catproductoRepository.save(catproductoUpdate);
  }

  async remove(id: number) {
    const existe = await this.catproductoRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`El género ${id} no existe.`);
    }

    return this.catproductoRepository.delete(id);
  }
}
