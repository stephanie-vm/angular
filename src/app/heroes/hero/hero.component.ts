import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:number = 45;


// esto es un get
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  //Esto es un método, :string --> es recomendable definir el tipo de dato
  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge() {
    this.age = 22;
  }

  resetForm():void {
    this.name = 'ironman',
    this.age = 45
  }

}
