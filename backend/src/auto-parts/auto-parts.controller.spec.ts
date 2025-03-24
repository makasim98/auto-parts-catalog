import { Test, TestingModule } from '@nestjs/testing';
import { AutoPartsController } from './auto-parts.controller';
import { AutoPartsService } from './auto-parts.service';

describe('AutoPartsController', () => {
  let controller: AutoPartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutoPartsController],
      providers: [AutoPartsService],
    }).compile();

    controller = module.get<AutoPartsController>(AutoPartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
