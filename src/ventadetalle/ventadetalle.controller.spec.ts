import { Test, TestingModule } from '@nestjs/testing';
import { CancionController } from './ventadetalle.controller';
import { CancionService } from './ventadetalle.service';

describe('CancionController', () => {
  let controller: CancionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CancionController],
      providers: [CancionService],
    }).compile();

    controller = module.get<CancionController>(CancionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
