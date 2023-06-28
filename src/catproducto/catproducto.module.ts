import { Module } from '@nestjs/common';
import { GeneroService } from './catproducto.service';
import { GeneroController } from './catproducto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatProductoEntity } from './entities/catproducto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatProductoEntity])],
  controllers: [GeneroController],
  providers: [GeneroService]
})
export class CatProductoModule {}
