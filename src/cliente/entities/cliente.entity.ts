import { VentaEntity } from "src/venta/entities/venta.entity";
import { Column, OneToMany, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cliente')
export class ClienteEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() nit: string;

  @Column({ name: 'codigo_cliente' }) codigoCliente: number;  

  @Column({ name: 'nombre_cliente' }) nombreCliente: string;

  @Column() direccion: string;  

  @Column() genero: string;  

  @Column() telefono: string;  

  @Column() celular: string;  

  @Column() email: string;  

  @Column({ name: 'fecha_nacimiento' }) fechNacimiento: Date;

  @CreateDateColumn({ name: 'fecha_creacion' }) fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' }) fechaModificacion: Date;

  @OneToMany(() => VentaEntity, (venta) => venta.cliente)
  venta: VentaEntity[];

}
