import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatProductoDto } from './dto/create-catproducto.dto';
import { UpdateCatProductoDto } from './dto/update-catproducto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CatProductoEntity } from './entities/catproducto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(CatProductoEntity)
    private generoRepository: Repository<CatProductoEntity>,
  ) {}

  async create(
    createCatProductoDto: CreateCatProductoDto,
  ): Promise<CatProductoEntity> {
    const existe = await this.generoRepository.findOneBy({
      descripcion: createCatProductoDto.descripcion.trim(),
    });

    if (existe) {
      throw new ConflictException(`El género ${createCatProductoDto.descripcion} ya existe.`);
    }

    return this.generoRepository.save({
      descripcion: createCatProductoDto.descripcion.trim(),
    });
  }

  async findAll(): Promise<CatProductoEntity[]> {
    return this.generoRepository.find();
  }

  async findOne(id: number): Promise<CatProductoEntity> {
    const genero = await this.generoRepository.findOneBy({id});

    if (!genero) {
      throw new NotFoundException(`El género ${id} no existe.`);
    }

    return genero;
  }

  async update(id: number, updateCatProductoDto: UpdateCatProductoDto) {
    const genero = await this.generoRepository.findOneBy({id});

    if (!genero) {
      throw new NotFoundException(`El género ${id} no existe.`);
    }

    const generoUpdate = Object.assign(genero, updateCatProductoDto);
    return this.generoRepository.save(generoUpdate);
  }

  async remove(id: number) {
    const existe = await this.generoRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`El género ${id} no existe.`);
    }

    return this.generoRepository.delete(id);
  }
}
