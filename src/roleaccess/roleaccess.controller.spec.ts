import { Test, TestingModule } from '@nestjs/testing';
import { RoleaccessController } from './roleaccess.controller';
import { RoleaccessService } from './roleaccess.service';

describe('RoleaccessController', () => {
  let controller: RoleaccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleaccessController],
      providers: [RoleaccessService],
    }).compile();

    controller = module.get<RoleaccessController>(RoleaccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
