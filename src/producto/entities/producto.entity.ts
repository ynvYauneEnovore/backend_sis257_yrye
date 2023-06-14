import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('producto')
export class ProductoEntity {
  @PrimaryGeneratedColumn({ name: 'id_producto' })
  id: number;

  @Column({ length: 250, name: 'nombre' })
  Nombre: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'precio' })
  Precio: number;

  @Column({ length: 5000, name: 'descripcion' })
  Descripción: string;

  @Column({ name: 'foto_producto' })
  Foto: string; // Cambiar el tipo según cómo se manejará la referencia a la imagen o ruta del archivo de imagen

  @CreateDateColumn({ name: 'fecha_creacion', type: 'timestamp' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion', type: 'timestamp' })
  fechaModificacion: Date;
}
