import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateProductoDto {


  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsNumber({}, { message: 'El campo precio debe ser de tipo numérico' })
  @IsNotEmpty({ message: 'El campo precio no debe estar vacío' })
  readonly precio: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo descripción no debe ser vacío' })
  @IsString({ message: 'El campo descripción debe ser de tipo cadena' })
  readonly descripcion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo estado no debe estar vacío' })
  readonly estado: boolean;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo imagen no debe ser vacío' })
  @IsString({ message: 'El campo imagen debe ser de tipo cadena' })
  readonly imagen: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo min no debe ser vacío' })
  @IsString({ message: 'El campo min debe ser de tipo cadena' })
  readonly min: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo max no debe ser vacío' })
  @IsString({ message: 'El campo max debe ser de tipo cadena' })
  readonly max: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo stock no debe ser vacío' })
  @IsString({ message: 'El campo stock debe ser de tipo cadena' })
  readonly stock: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo stock no debe ser vacío' })
  @IsString({ message: 'El campo stock debe ser de tipo cadena' })
  readonly catproducto: string;
}
