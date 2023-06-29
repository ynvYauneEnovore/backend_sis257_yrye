import { Test, TestingModule } from '@nestjs/testing';
import { CatProductoService } from './catproducto.service';

describe('CatProductoService', () => {
  let service: CatProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatProductoService],
    }).compile();

    service = module.get<CatProductoService>(CatProductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
