import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Animal } from '../model/animal';
import { Observable } from 'rxjs/Observable';
import { ANIMALS } from '../model/mock-animals';
import { state, Injectable } from '@angular/core';

@Injectable()
export class AnimalResolver implements Resolve<Animal> {
  constructor() {
    const id: number = Number.parseInt(state.root.params.id);
    return ANIMALS[id];
  }
  // tslint:disable-next-line:no-shadowed-variable
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Animal | Observable<Animal> | Promise<Animal> {
    throw new Error('Method not implemented.');
  }
}
