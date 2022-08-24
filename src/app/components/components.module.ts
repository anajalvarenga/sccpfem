import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersCardComponent } from './players-card/players-card.component';



@NgModule({
  declarations: [
    PlayersCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayersCardComponent
  ]
})
export class ComponentsModule { }
