import { Test, TestingModule } from '@nestjs/testing';
import { ProdcutoController } from './prodcuto.controller';
import { ProdcutoService } from './prodcuto.service';

describe('ProductoController', () => {
  let controller: ProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoController],
      providers: [ProductoService],
    }).compile();

    controller = module.get<ProductoController>(ProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
