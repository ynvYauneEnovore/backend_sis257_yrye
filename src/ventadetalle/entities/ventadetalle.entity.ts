import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductoEntity } from "src/producto/entities/producto.entity";
import { IsNumber, IsDecimal, Min } from 'class-validator';


@Entity('ventadetalles')
export class VentaDetalleEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ name: 'id_ventadetalle' }) idVentaDetalle: number;
  
  @IsNumber()
  @IsDecimal({ decimal_digits: '1,2' })
  cantidad: number;
  
  @Column({ name: 'precio_neto' }) precioNeto: number;

  @Column() descuento: string;

  @CreateDateColumn({ name: 'fecha_creacion' }) fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' }) fechaModificacion: Date;

  @ManyToOne(() => ProductoEntity, (producto) => producto.ventadetalle)
  @JoinColumn({ name: 'id_ventadetalle', referencedColumnName: 'id' })
  producto: ProductoEntity;

}
