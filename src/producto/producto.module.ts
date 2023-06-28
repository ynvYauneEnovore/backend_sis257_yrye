import { Module } from '@nestjs/common';
import { CancionService } from './producto.service';
import { CancionController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntity } from './entities/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoEntity])],
  controllers: [CancionController],
  providers: [CancionService]
})
export class ProductoModule {}
