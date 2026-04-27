import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [
    {
      id: 1,
      nome: "faliani",
      potere: "lavarsi le mani",
      completata: false
    },
    {
      id: 2,
      nome: "piemontese",
      potere: "ridere",
      completata: false
    },
    {
      id: 3,
      nome: "morelli",
      potere: "regolare il tempo",
      completata: false
    }
  ];

  heroList(): Hero[] {
    return this.heroes;
  }
}
