import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private _location: Location) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = _heroesService.getHeroe(params['id']);
    });
  }

  volver() {
    this._location.back();
  }

}
