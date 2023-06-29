import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductoEntity } from './entities/producto.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('PRODUCTOS')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('producto') // Corregir el nombre del endpoint a 'productos'
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  @ApiCreatedResponse({ type: ProductoEntity })
  create(@Body() createProductoDto: CreateProductoDto) { // Corregir el nombre del DTO
    return this.productoService.create(createProductoDto);
  }

  @Get()
  @ApiOkResponse({ type: ProductoEntity, isArray: true })
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductoEntity })
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ProductoEntity })
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) { // Corregir el nombre del DTO
    return this.productoService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProductoEntity })
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}
