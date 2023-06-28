import { CatProductoEntity } from "src/catproducto/entities/catproducto.entity";
import { VentaDetalleEntity } from "src/ventadetalle/entities/ventadetalle.entity";
import { Column, OneToMany, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('producto')
export class ProductoEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ name: 'id_genero' }) idGenero: number;

  @Column() nombre: string;
  
  @Column() duracion: number;

  @Column() tags: string;

  @Column() url: string;

  @CreateDateColumn({ name: 'fecha_creacion' }) fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' }) fechaModificacion: Date;

  @ManyToOne(() => CatProductoEntity, (catproducto) => catproducto.producto)
  @JoinColumn({ name: 'id_genero', referencedColumnName: 'id' })
  catproducto: CatProductoEntity;

  @OneToMany(() => VentaDetalleEntity, (ventadetalle) => ventadetalle.producto)
  ventadetalle: VentaDetalleEntity[];

}
