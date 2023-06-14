import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductoEntity } from './entities/producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(ProductoEntity)
    private productoRepository: Repository<ProductoEntity>,
  ) {}

  async create(createProductoDto: CreateProductoDto): Promise<ProductoEntity> {
    const existe = await this.productoRepository.findOne({
      where: { Nombre: createProductoDto.Nombre.trim() },
    });

    if (existe) {
      throw new ConflictException(`El producto ${createProductoDto.Nombre} ya existe.`);
    }

    const nuevoProducto = this.productoRepository.create(createProductoDto);
    return this.productoRepository.save(nuevoProducto);
  }

  async findAll(): Promise<ProductoEntity[]> {
    return this.productoRepository.find();
  }

  async findOne(id: number): Promise<ProductoEntity> {
    const producto = await this.productoRepository.findOneBy({ id });

    if (!producto) {
      throw new NotFoundException(`El producto ${id} no existe.`);
    }

    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto): Promise<ProductoEntity> {
    const producto = await this.productoRepository.findOneBy({ id });

    if (!producto) {
      throw new NotFoundException(`El producto ${id} no existe.`);
    }

    const productoUpdate = { ...producto, ...updateProductoDto };
    return this.productoRepository.save(productoUpdate);
  }

  async remove(id: number): Promise<void> {
    const producto = await this.productoRepository.findOneBy({ id });

    if (!producto) {
      throw new NotFoundException(`El producto ${id} no existe.`);
    }

    await this.productoRepository.remove(producto);
  }
}
