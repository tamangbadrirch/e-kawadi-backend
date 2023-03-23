import { Test, TestingModule } from '@nestjs/testing';
import { UsermgmtController } from './usermgmt.controller';
import { UsermgmtService } from './usermgmt.service';

describe('UsermgmtController', () => {
  let controller: UsermgmtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsermgmtController],
      providers: [UsermgmtService],
    }).compile();

    controller = module.get<UsermgmtController>(UsermgmtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
