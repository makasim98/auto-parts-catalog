import { Test, TestingModule } from '@nestjs/testing';
import { AutoPartsService } from './auto-parts.service';

describe('AutoPartsService', () => {
  let service: AutoPartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutoPartsService],
    }).compile();

    service = module.get<AutoPartsService>(AutoPartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
