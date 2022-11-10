import { Component, HostListener } from '@angular/core';
import { playersList } from 'src/app/data/players';
import { IPlayer } from 'src/app/interfaces/IPlayers';

@Component({
  selector: 'app-players-section',
  templateUrl: './players-section.component.html',
  styleUrls: ['./players-section.component.scss']
})
export class PlayersSectionComponent  {
  playersCarousel = playersList.slice();
  listWidth = this.playersCarousel.length * 200;
  scrollX = 0;
  selectedPlayer = this.playersCarousel[0];

  onPreviousPlayer() {
    let newScrollX = this.scrollX + Math.round(window.innerWidth / 4);
    if(newScrollX > 0) {
        newScrollX = 0;
    }
    this.scrollX = newScrollX;
  }

  onNextPlayer() {
    let newScrollX = this.scrollX - Math.round(window.innerWidth / 4);
    console.log({newScrollX});
    if((window.innerWidth - this.listWidth) > newScrollX) {
        newScrollX = (window.innerWidth - this.listWidth) - 60;
    }
    this.scrollX = newScrollX;
  }

  onSelectPlayer(player: IPlayer) {
    this.selectedPlayer = player;
  }
}
