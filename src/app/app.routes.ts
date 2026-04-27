import { Routes } from '@angular/router';
import { HeroList } from './components/hero-list/hero-list';
import { HeroEdit } from './components/hero-edit/hero-edit';

export const routes: Routes = [
    { path: '', component: HeroList },
    { path: 'hero', component: HeroEdit },
    { path: 'hero/:id', component: HeroEdit },
    { path: '**', redirectTo: '' }
];
