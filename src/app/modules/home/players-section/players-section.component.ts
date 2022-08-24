import { Component } from '@angular/core';
import { playersList } from 'src/app/data/players';

@Component({
  selector: 'app-players-section',
  templateUrl: './players-section.component.html',
  styleUrls: ['./players-section.component.scss']
})
export class PlayersSectionComponent  {
  players = playersList;
  playersCarousel = playersList.slice(0, 3);
  leftCardIndex = 0;
  rightCardIndex = 2;

  constructor() {}

  onNextPlayer() {
    if(this.rightCardIndex === (this.players.length - 1)) {
      this.rightCardIndex = 0;
      this.leftCardIndex++;
      this.playersCarousel.shift();
      this.playersCarousel.push(this.players[0]);
    } else if (this.leftCardIndex === (this.players.length - 1)) {
      this.leftCardIndex = 0;
      this.rightCardIndex++
      this.playersCarousel.shift();
      this.playersCarousel.push(this.players[this.rightCardIndex]);
    } else {
      this.rightCardIndex++;
      this.leftCardIndex++
      this.playersCarousel.shift();
      this.playersCarousel.push(this.players[this.rightCardIndex]);
    }
  }

  onPreviousPlayer() {
    if(this.leftCardIndex === 0) {
      this.leftCardIndex = (this.players.length - 1);
      this.rightCardIndex--;
      this.playersCarousel.pop();
      this.playersCarousel.unshift(this.players[this.players.length - 1]);
    } else if (this.rightCardIndex === 0) {
      this.leftCardIndex--;
      this.rightCardIndex = (this.players.length - 1);
      this.playersCarousel.pop();
      this.playersCarousel.unshift(this.players[this.leftCardIndex]);
    } else {
      this.rightCardIndex--;
      this.leftCardIndex--;
      this.playersCarousel.pop();
      this.playersCarousel.unshift(this.players[this.leftCardIndex]);
    }
  }
}
