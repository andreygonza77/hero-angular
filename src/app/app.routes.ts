import { Routes } from '@angular/router';
import { HeroCard } from './components/hero-card/hero-card';
import { HeroList } from './components/hero-list/hero-list';

export const routes: Routes = [
    { path: '', component: HeroCard },
    { path: 'hero/:id', component: HeroCard},
    { path: 'hero/list', component: HeroList},
    { path: '**', redirectTo: '' }];

