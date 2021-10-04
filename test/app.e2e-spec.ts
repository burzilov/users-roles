import { Test, TestingModule } from '@nestjs/testing';
import { UsersRolesService } from '../src/app.service';
import { UsersRolesOptions } from '../src/app.interfaces';

describe('UsersRolesService', () => {
  let service: UsersRolesService;
  let module: TestingModule;

  beforeAll(async () => {
    const options: UsersRolesOptions = {
      foo: 'bar',
    };

    module = await Test.createTestingModule({
      providers: [
        {
          provide: UsersRolesService,
          useValue: new UsersRolesService(options),
        },
      ],
    }).compile();

    service = module.get<UsersRolesService>(UsersRolesService);
  });

  it('Foo', () => {
    service.foo('bar').subscribe({
      next: (bar: string) => {
        expect(bar).toBe('bar');
      },
    });
  });
});
