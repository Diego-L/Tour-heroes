import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  //moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class HeroDetailComponent implements OnInit {
 
  hero: Hero;
  
  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
  this.location.back();
  
  }
save(): void {
  this.heroService.update(this.hero)
    .then(() => this.goBack());
}

  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
) {}

 }