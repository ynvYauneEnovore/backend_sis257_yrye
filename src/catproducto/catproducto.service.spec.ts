import { Test, TestingModule } from '@nestjs/testing';
import { GeneroService } from './catproducto.service';

describe('GeneroService', () => {
  let service: GeneroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneroService],
    }).compile();

    service = module.get<GeneroService>(GeneroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
