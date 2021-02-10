import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('a 1, should equal 10', () => {
      const mockBody = {
        a: 1,
      };
      expect(appController.checkout(mockBody)).toBe(10);
    });

    it('a 3, should equal 25', () => {
      const mockBody = {
        a: 3,
      };
      expect(appController.checkout(mockBody)).toBe(25);
    });

    it('b 1, should equal 20', () => {
      const mockBody = {
        b: 1,
      };
      expect(appController.checkout(mockBody)).toBe(20);
    });

    it('c 1, should equal 30', () => {
      const mockBody = {
        c: 1,
      };
      expect(appController.checkout(mockBody)).toBe(30);
    });

    it('c 3, should equal 90', () => {
      const mockBody = {
        c: 3,
      };
      expect(appController.checkout(mockBody)).toBe(90);
    });

    it('a 1, b 2, c 3, should equal 130', () => {
      const mockBody = {
        a: 1,
        b: 2,
        c: 3,
      };
      expect(appController.checkout(mockBody)).toBe(130);
    });
  });
});
