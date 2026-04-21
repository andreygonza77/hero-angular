import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../models/hero.model';
import { HeroCard } from '../hero-card/hero-card';

@Component({
  selector: 'app-hero-edit',
  imports: [HeroCard, FormsModule],
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

  save() {
    // this.hero.id = this.hero.id === null ? -1 : this.hero.id;
    if (typeof this.hero.id === 'undefined' || this.hero.id === null) {
      this.hero.id = -1;
    }
    this.onSave.emit(this.hero);
    this.reset();
  }

  reset() {
    this.hero = {
      id: -1,
      nome: "",
      potere: "",
      completata: false
    };
  }
}