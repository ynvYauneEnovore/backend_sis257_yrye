import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateProductoDto } from "src/producto/dto/create-producto.dto";

export class CreateCatProductoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
  readonly nombre: string;

  @ApiProperty({ type: () => [CreateProductoDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateProductoDto)
  producto: CreateProductoDto[];
}
