import { Component, Input } from '@angular/core';
import { IPlayer } from 'src/app/interfaces/IPlayers';

@Component({
  selector: 'app-players-card',
  templateUrl: './players-card.component.html',
  styleUrls: ['./players-card.component.scss']
})
export class PlayersCardComponent  {
  @Input()
  player!: IPlayer;

  constructor() {}
}
