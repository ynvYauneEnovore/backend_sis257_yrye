import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductoEntity } from "src/producto/entities/producto.entity";

@Entity('ventadetalles')
export class VentaDetalleEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ name: 'id_ventadetalle' }) idVentaDetalle: number;

  @Column() nombre: string;
  
  @Column() duracion: number;

  @Column() tags: string;

  @Column() url: string;

  @CreateDateColumn({ name: 'fecha_creacion' }) fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' }) fechaModificacion: Date;

  @ManyToOne(() => ProductoEntity, (producto) => producto.ventadetalle)
  @JoinColumn({ name: 'id_ventadetalle', referencedColumnName: 'id' })
  producto: ProductoEntity;

}
