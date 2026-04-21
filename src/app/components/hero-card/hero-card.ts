import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {
  @Input() hero!: Hero;
  @Output() onMissionDone = new EventEmitter<Hero>();

  notifyParent() {
    this.onMissionDone.emit(this.hero);
  }
}
