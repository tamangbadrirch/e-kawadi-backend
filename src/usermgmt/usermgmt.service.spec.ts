import { Test, TestingModule } from '@nestjs/testing';
import { UsermgmtService } from './usermgmt.service';

describe('UsermgmtService', () => {
  let service: UsermgmtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsermgmtService],
    }).compile();

    service = module.get<UsermgmtService>(UsermgmtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
