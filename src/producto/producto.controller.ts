import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductoService } from './producto.service';
import { ProductoEntity } from './entities/producto.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('CRUD PRODUCTOS')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  @ApiCreatedResponse({ type: ProductoEntity })
  @ApiOperation({ summary: 'Crea un nuevo producto' })
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  @Get()
  @ApiOkResponse({ type: ProductoEntity, isArray: true })
  @ApiOperation({ summary: 'Obtiene la lista de productos' })
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductoEntity })
  @ApiOperation({ summary: 'Obtiene un producto basado en el identificador' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productoService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ProductoEntity })
  @ApiOperation({
    summary: 'Actualiza los datos de un producto basado en el identificador',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    return this.productoService.update(id, updateProductoDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  @ApiOperation({ summary: 'Elimina un producto basado en el identificador' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productoService.remove(id);
  }
}
