import { Routes } from '@angular/router';
import { HeroList } from './components/hero-list/hero-list';
import { HeroEdit } from './components/hero-edit/hero-edit';
import { HeroCard } from './components/hero-card/hero-card';

export const routes: Routes = [
    { path: '', component: HeroList },
    { path: 'hero', component: HeroEdit },
    { path: 'hero/:id', component: HeroCard },
    { path: '**', redirectTo: '' }
];
