import { Inject, Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { UsersRolesOptions } from './app.interfaces';
import { OPTIONS } from './app.interfaces';

@Injectable()
export class UsersRolesService {
  constructor(@Inject(OPTIONS) private options: UsersRolesOptions) {}

  foo(bar: string): Observable<any> {
    // service test
    return of(bar);
  }
}
