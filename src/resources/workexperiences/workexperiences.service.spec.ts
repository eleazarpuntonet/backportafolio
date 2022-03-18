import { Test, TestingModule } from '@nestjs/testing';
import { WorkexperiencesService } from './workexperiences.service';

describe('WorkexperiencesService', () => {
  let service: WorkexperiencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkexperiencesService],
    }).compile();

    service = module.get<WorkexperiencesService>(WorkexperiencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
