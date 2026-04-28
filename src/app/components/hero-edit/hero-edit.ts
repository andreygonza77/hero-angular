import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-edit',
  imports: [ FormsModule],
  templateUrl: './hero-edit.html',
  styleUrl: './hero-edit.css',
})
export class HeroEdit {
  @Input() hero: Hero = {
    id: -1,
    nome: "",
    potere: "",
    completata: false
  };
  @Output() onSave = new EventEmitter<Hero>();

  constructor(private HeroService: HeroService) {}
  
  ngOnInit() {}

  saveHero() {
    this.HeroService.saveHero(this.hero);
    this.HeroService.resetSelectedHero();
  }

  resetSelectedHero() {
    this.HeroService.resetSelectedHero();
  }
}