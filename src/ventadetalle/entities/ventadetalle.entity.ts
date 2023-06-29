import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductoEntity } from "src/producto/entities/producto.entity";
import { VentaEntity } from "src/venta/entities/venta.entity";
import { IsNumber, IsDecimal, Min } from 'class-validator';


@Entity('ventadetalle')
export class VentaDetalleEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ name: 'fk_id_ventadetalle_producto' }) idVentaDetalle: number;

  @Column({ name: 'fk_id_venta_ventadetalle' }) idVenta: number;
  
  @IsNumber()
  @IsDecimal({ decimal_digits: '1,2' })
  cantidad: number;
  
  @Column({ name: 'precio_neto' }) precioNeto: number;

  @Column() descuento: string;

  @CreateDateColumn({ name: 'fecha_creacion' }) fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' }) fechaModificacion: Date;

  @ManyToOne(() => ProductoEntity, (producto) => producto.ventadetalle)
  @JoinColumn({ name: 'fk_id_ventadetalle_producto', referencedColumnName: 'id' })
  producto: ProductoEntity;

  @ManyToOne(() => VentaEntity, (venta) => venta.ventadetalle)
  @JoinColumn({ name: 'fk_id_venta_ventadetalle', referencedColumnName: 'id' })
  venta: VentaEntity;

}
