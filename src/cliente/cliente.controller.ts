import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateVentaDto } from './dto/create-cliente.dto';
import { UpdateVentaDto } from './dto/update-cliente.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('canciones')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('canciones')
export class ClienteController {
  constructor(private readonly cancionService: ClienteService) {}

  @Post()
  create(@Body() createCancionDto: CreateVentaDto) {
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
  update(@Param('id') id: string, @Body() updateCancionDto: UpdateVentaDto) {
    return this.cancionService.update(+id, updateCancionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancionService.remove(+id);
  }
}
