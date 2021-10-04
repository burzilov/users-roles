import { DynamicModule, Global, Module } from '@nestjs/common';
import { UsersRolesOptions, OPTIONS } from './app.interfaces';
import { UsersRolesService } from './app.service';

@Global()
@Module({
  exports: [UsersRolesService],
  providers: [UsersRolesService],
})
export class UsersRolesModule {
  public static register(options: UsersRolesOptions): DynamicModule {
    return {
      module: UsersRolesModule,
      providers: [{ provide: OPTIONS, useValue: options }],
    };
  }
}
