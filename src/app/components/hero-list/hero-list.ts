import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { CommonModule } from '@angular/common';
import { HeroCard } from '../hero-card/hero-card';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-list',
  imports: [HeroCard, CommonModule],
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

  markAsDone(hero: Hero): void {
    this.HeroService.markAsDone(hero);
  }

  selectHero(hero: Hero): void {
    this.HeroService.selectHero(hero);
  }

  saveHero(hero: Hero): void {
    this.HeroService.saveHero(hero);
  }
}