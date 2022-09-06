import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'

import { PlayersCardComponent } from './players-card/players-card.component';
import { NextMatchCardComponent } from './next-match-card/next-match-card.component';
import { MatchModalComponent } from './match-modal/match-modal.component';



@NgModule({
  declarations: [
    PlayersCardComponent,
    NextMatchCardComponent,
    MatchModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    PlayersCardComponent,
    NextMatchCardComponent,
    MatchModalComponent
  ]
})
export class ComponentsModule { }
