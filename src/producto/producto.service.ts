import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoEntity } from './entities/producto.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(ProductoEntity)
    private productoRepository: Repository<ProductoEntity>,
  ) {}

  async create(
    createProductoDto: CreateProductoDto,
  ): Promise<ProductoEntity> {
    const existe = await this.productoRepository.findOneBy({
      nombre: createProductoDto.nombre.trim(),
    });

    if (existe) {
      throw new ConflictException(`El género ${createProductoDto.nombre} ya existe.`);
    }

    return this.productoRepository.save({
      nombre: createProductoDto.nombre.trim(),
    });
  }

  async findAll(): Promise<ProductoEntity[]> {
    return this.productoRepository.find();
  }

  async findOne(id: number): Promise<ProductoEntity> {
    const catproducto = await this.productoRepository.findOneBy({id});

    if (!catproducto) {
      throw new NotFoundException(`El género ${id} no existe.`);
    }

    return catproducto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const catproducto = await this.productoRepository.findOneBy({id});

    if (!catproducto) {
      throw new NotFoundException(`El género ${id} no existe.`);
    }

    const catproductoUpdate = Object.assign(catproducto, updateProductoDto);
    return this.productoRepository.save(catproductoUpdate);
  }

  async remove(id: number) {
    const existe = await this.productoRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`El género ${id} no existe.`);
    }

    return this.productoRepository.delete(id);
  }
}
