import { Module } from '@nestjs/common';
import { CatProductoService } from './catproducto.service';
import { CatProductoController } from './catproducto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatProductoEntity } from './entities/catproducto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatProductoEntity])],
  controllers: [CatProductoController],
  providers: [CatProductoService],
})
export class CatProductoModule {}
