import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Tracer' },
      { id: 2, name: 'Reaper' },
      { id: 3, name: 'Widowmaker' },
      { id: 4, name: 'Pharah' },
      { id: 5, name: 'Reinhardt' },
      { id: 6, name: 'Mercy' },
      { id: 7, name: 'Torbjörn' },
      { id: 8, name: 'Hanzo' },
      { id: 9, name: 'Winston' },
      { id: 10, name: 'Zenyatta' },
      { id: 11, name: 'Bastion' },
      { id: 12, name: 'Symmetra' },
      { id: 13, name: 'Zarya' },
      { id: 14, name: 'McCree' },
      { id: 15, name: 'Soldier: 76' },
      { id: 16, name: 'Lúcio' },
      { id: 17, name: 'Roadhog' },
      { id: 18, name: 'Junkrat' },
      { id: 19, name: 'D.Va' },
      { id: 20, name: 'Mei' },
      { id: 21, name: 'Genji' },
      { id: 22, name: 'Ana' },
      { id: 23, name: 'Sombra' },
      { id: 24, name: 'Orisa' },
      { id: 25, name: 'Doomfist' },
      { id: 26, name: 'Moira' },
      { id: 27, name: 'Brigitte' },
      { id: 28, name: 'Wrecking Ball' },
      { id: 29, name: 'Ashe' },
      { id: 30, name: 'Baptiste' },
      { id: 31, name: 'Sigma' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
