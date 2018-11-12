import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: []
})
export class ResultsComponent implements OnInit {

  heroeResults: Heroe[] = [];

  constructor( private _heroesService: HeroesService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroeResults = this._heroesService.buscarHeroes(params['termino']);
    });
  }

}
