import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultsComponent } from './components/results/results.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent  },
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'results/:termino', component: ResultsComponent},
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
