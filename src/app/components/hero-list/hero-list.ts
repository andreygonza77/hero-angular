import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../models/hero.model';
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
  constructor(private heroService: HeroService) {}

  get heroes() {
    return this.heroService.heroList();
  }

  get heroSelected() {
    return this.heroService.heroSelected;
  }

  markAsDone(hero: Hero) {
    this.heroService.markAsDone(hero);
  }

  selectHero(hero: Hero) {
    this.heroService.selectHero(hero);
  }

  saveHero(hero: Hero) {
    this.heroService.saveHero(hero);
  }
}