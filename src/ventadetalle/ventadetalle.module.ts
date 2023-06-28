import { Module } from '@nestjs/common';
import { VentaDetalleService } from './ventadetalle.service';
import { VentaDetalleController } from './ventadetalle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaDetalleEntity } from './entities/ventadetalle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VentaDetalleEntity])],
  controllers: [VentaDetalleController],
  providers: [VentaDetalleService]
})
export class VentaDetalleModule {}
