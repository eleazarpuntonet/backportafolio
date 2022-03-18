import { Test, TestingModule } from '@nestjs/testing';
import { WorkexperiencesController } from './workexperiences.controller';
import { WorkexperiencesService } from './workexperiences.service';

describe('WorkexperiencesController', () => {
  let controller: WorkexperiencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkexperiencesController],
      providers: [WorkexperiencesService],
    }).compile();

    controller = module.get<WorkexperiencesController>(WorkexperiencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
