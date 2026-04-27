import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class HeroList implements OnInit, AfterViewInit {
  heroSelected: Hero = {} as Hero;
  heroes!: Hero[];
  contatore = 0;


  constructor(private HeroService:  HeroService) {
    
  }

  ngOnInit() {
    this.heroes = this.HeroService.heroList();
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

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
}