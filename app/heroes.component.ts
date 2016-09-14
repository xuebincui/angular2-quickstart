import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Hero } from './hero';

// 注意，英雄的名字全被显示成大写字母。那是 uppercase 管道的效果，借助它，我们能插手“插值表达式绑定”的过程。去管道操作符 ( | ) 后面找它。

@Component({
    selector: 'my-heroes',
    //template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>'
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private router: Router, private heroService: HeroService) { }

    getHeroes() {
        //this.heroes = this.heroService.getHeroes();
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    ngOnInit() {
        this.getHeroes();
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
