import { Component } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { CommonModule } from '@angular/common';
import { HeroCard } from '../hero-card/hero-card';
import { HeroEdit } from '../hero-edit/hero-edit';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-list',
  imports: [HeroCard, CommonModule, HeroEdit],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {

  heroSelected: Hero = {} as Hero;

  heroes: Hero[] = [
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
  contatore = 0;
  markAsDone(hero: Hero) {
    hero.completata = true;
    this.contatore++;
  }

  selectHero(hero: Hero) {
    this.heroSelected = {...hero};
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
  }

  constructor(private HeroService:  HeroService) {}

  heroList(){
    return this.HeroService.heroList();  
  }
}