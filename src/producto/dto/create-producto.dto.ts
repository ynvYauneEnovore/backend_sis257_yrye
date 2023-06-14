import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo Nombre no debe ser vacío' })
  @IsString({ message: 'El campo Nombre debe ser de tipo cadena' })
  @MaxLength(250, { message: 'El campo Nombre no debe ser mayor a 250 caracteres' })
  Nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo Precio no debe ser vacío' })
  Precio: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo Descripción no debe ser vacío' })
  @IsString({ message: 'El campo Descripción debe ser de tipo cadena' })
  @MaxLength(5000, { message: 'El campo Descripción no debe ser mayor a 5000 caracteres' })
  Descripción: string;

  @ApiProperty()
  Foto: string; // Cambiar el tipo según cómo se manejará la referencia a la imagen o ruta del archivo de imagen
}
