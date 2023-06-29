import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VentaDetalleService } from './ventadetalle.service';
import { CreateVentaDetalleDto } from './dto/create-ventadetalle.dto';
import { UpdateVentaDetalleDto } from './dto/update-ventadetalle.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('DETALLES DE LA VENTA')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('canciones')
export class VentaDetalleController {
  constructor(private readonly cancionService: VentaDetalleService) {}

  @Post()
  create(@Body() createCancionDto: CreateVentaDetalleDto) {
    return this.cancionService.create(createCancionDto);
  }

  @Get()
  findAll() {
    return this.cancionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cancionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCancionDto: UpdateVentaDetalleDto) {
    return this.cancionService.update(+id, updateCancionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancionService.remove(+id);
  }
}
