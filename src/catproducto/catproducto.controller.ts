import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GeneroService } from './catproducto.service';
import { CreateCatProductoDto } from './dto/create-catproducto.dto';
import { UpdateCatProductoDto } from './dto/update-catproducto.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CatProductoEntity } from './entities/catproducto.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('generos')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('generos')
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Post()
  @ApiCreatedResponse({ type: CatProductoEntity })
  create(@Body() createCatProductoDto: CreateCatProductoDto) {
    return this.generoService.create(createCatProductoDto);
  }

  @Get()
  @ApiOkResponse({ type: CatProductoEntity, isArray: true })
  findAll() {
    return this.generoService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CatProductoEntity })
  findOne(@Param('id') id: string) {
    return this.generoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CatProductoEntity })
  update(@Param('id') id: string, @Body() updateCatProductoDto: UpdateCatProductoDto) {
    return this.generoService.update(+id, updateCatProductoDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.generoService.remove(+id);
  }
}
