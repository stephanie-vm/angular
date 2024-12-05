import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    HeroComponent,
    ListComponent
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
