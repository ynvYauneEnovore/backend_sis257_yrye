import { VentaDetalleEntity } from "src/ventadetalle/entities/ventadetalle.entity";
import { ClienteEntity } from "src/cliente/entities/cliente.entity";
import { Column, OneToMany, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('venta')
export class VentaEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ name: 'id_cliente' }) idCliente: number;

  @Column() creada: string;

  @Column() estado: string;

  @Column() finalizada: string;  

  @CreateDateColumn({ name: 'fecha_creacion' }) fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' }) fechaModificacion: Date;

  @OneToMany(() => VentaDetalleEntity, (ventadetalle) => ventadetalle.venta)
  ventadetalle: VentaDetalleEntity[];

  @ManyToOne(() => ClienteEntity, (cliente) => cliente.venta)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente: ClienteEntity;

}
