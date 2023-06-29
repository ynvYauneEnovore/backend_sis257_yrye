import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CatProductoService } from './catproducto.service';
import { CreateCatProductoDto } from './dto/create-catproducto.dto';
import { UpdateCatProductoDto } from './dto/update-catproducto.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CatProductoEntity } from './entities/catproducto.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('CATEGORÍA PRODUCTO  ')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('catproducto')
export class CatProductoController {
  constructor(private readonly catproductoService: CatProductoService) {}

  @Post()
  @ApiCreatedResponse({ type: CatProductoEntity })
  create(@Body() createCatProductoDto: CreateCatProductoDto) {
    return this.catproductoService.create(createCatProductoDto);
  }

  @Get()
  @ApiOkResponse({ type: CatProductoEntity, isArray: true })
  findAll() {
    return this.catproductoService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CatProductoEntity })
  findOne(@Param('id') id: string) {
    return this.catproductoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CatProductoEntity })
  update(@Param('id') id: string, @Body() updateCatProductoDto: UpdateCatProductoDto) {
    return this.catproductoService.update(+id, updateCatProductoDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.catproductoService.remove(+id);
  }
}
