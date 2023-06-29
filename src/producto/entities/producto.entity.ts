import { CatProductoEntity } from "src/catproducto/entities/catproducto.entity";
import { VentaDetalleEntity } from "src/ventadetalle/entities/ventadetalle.entity";
import { Column, OneToMany, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('producto')
export class ProductoEntity {
  @PrimaryGeneratedColumn() id: number;


  @Column() nombre: string;
  
  @Column() precio: number;

  @Column() descripcion: string;

  @Column() estado: boolean;

  @Column() imagen: string;

  @Column() catproducto: string;


  @Column() min: string;

  @Column() max: string;

  @Column() stock: string;

  @CreateDateColumn({ name: 'fecha_creacion' }) fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' }) fechaModificacion: Date;



  @OneToMany(() => VentaDetalleEntity, (ventadetalle) => ventadetalle.producto)
  ventadetalle: VentaDetalleEntity[];

}
