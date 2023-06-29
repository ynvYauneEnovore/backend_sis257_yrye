import { Test, TestingModule } from '@nestjs/testing';
import { CatProductoController } from './catproducto.controller';
import { CatProductoService } from './catproducto.service';

describe('CatProductoController', () => {
  let controller: CatProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatProductoController],
      providers: [CatProductoService],
    }).compile();

    controller = module.get<CatProductoController>(CatProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
