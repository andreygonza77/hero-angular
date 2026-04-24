import { Routes } from '@angular/router';
import { HeroList } from './components/hero-list/hero-list';
import { HeroCard } from './components/hero-card/hero-card';

export const routes: Routes = [
    { path: '', component: HeroList },
    { path: 'hero/:id', component: HeroCard },
    { path: '**', redirectTo: '' }
];
