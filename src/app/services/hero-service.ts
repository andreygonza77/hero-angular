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

  private selectedHero: Hero = {
    id: -1,
    nome: "",
    potere: "",
    completata: false
  };

  private completedCount = 0;

  heroList(): Hero[] {
    return this.heroes;
  }

  get heroSelected(): Hero {
    return this.selectedHero;
  }

  get doneCount(): number {
    return this.completedCount;
  }

  saveHero(hero: Hero) {
    if (hero.id === -1 || hero.id === null) {
      hero.id = this.heroes.length + 1;
      this.heroes.push(hero);
    } else {
      const index = this.heroes.findIndex(h => h.id === hero.id);
      if (index !== -1) {
        this.heroes[index] = hero;
      }
    }
    this.resetSelectedHero();
  }

  markAsDone(hero: Hero) {
    if (!hero.completata) {
      hero.completata = true;
      this.completedCount++;
    }
  }

  selectHero(hero: Hero) {
    this.selectedHero = { ...hero };
  }

  resetSelectedHero() {
    this.selectedHero = {
      id: -1,
      nome: "",
      potere: "",
      completata: false
    };
  }
}
