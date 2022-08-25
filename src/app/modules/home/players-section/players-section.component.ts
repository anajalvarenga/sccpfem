import { Component, HostListener } from '@angular/core';
import { playersList } from 'src/app/data/players';

@Component({
  selector: 'app-players-section',
  templateUrl: './players-section.component.html',
  styleUrls: ['./players-section.component.scss']
})
export class PlayersSectionComponent  {
  playersCarousel = playersList.slice(0, 3);
  leftCardIndex = 0;
  rightCardIndex = 2;

  mobileMode = false;
  mobileCardIndex = 0;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileMode = window.innerWidth < 1024;
    if(this.mobileMode) {
      this.playersCarousel = [playersList[0]];
      this.mobileCardIndex = 0;
    } else {
      this.playersCarousel = playersList.slice(0, 3);
      this.leftCardIndex = 0;
      this.rightCardIndex = 2;
    }
  }

  onNextPlayer() {
    this.mobileMode ? this.nextPlayerMobile() : this.nextPlayerDesktop();
  }

  onPreviousPlayer() {
    this.mobileMode ? this.previousPlayerMobile() : this.previousPlayerDesktop();
  }

  nextPlayerDesktop() {
    if(this.rightCardIndex === (playersList.length - 1)) {
      this.rightCardIndex = 0;
      this.leftCardIndex++;
      this.playersCarousel.shift();
      this.playersCarousel.push(playersList[0]);
    } else if (this.leftCardIndex === (playersList.length - 1)) {
      this.leftCardIndex = 0;
      this.rightCardIndex++
      this.playersCarousel.shift();
      this.playersCarousel.push(playersList[this.rightCardIndex]);
    } else {
      this.rightCardIndex++;
      this.leftCardIndex++
      this.playersCarousel.shift();
      this.playersCarousel.push(playersList[this.rightCardIndex]);
    }
  }

  previousPlayerDesktop() {
    if(this.leftCardIndex === 0) {
      this.leftCardIndex = (playersList.length - 1);
      this.rightCardIndex--;
      this.playersCarousel.pop();
      this.playersCarousel.unshift(playersList[playersList.length - 1]);
    } else if (this.rightCardIndex === 0) {
      this.leftCardIndex--;
      this.rightCardIndex = (playersList.length - 1);
      this.playersCarousel.pop();
      this.playersCarousel.unshift(playersList[this.leftCardIndex]);
    } else {
      this.rightCardIndex--;
      this.leftCardIndex--;
      this.playersCarousel.pop();
      this.playersCarousel.unshift(playersList[this.leftCardIndex]);
    }
  }

  nextPlayerMobile() {
    if(this.mobileCardIndex === (playersList.length - 1)) {
      this.mobileCardIndex = 0;
      this.playersCarousel.pop();
      this.playersCarousel.push(playersList[0]);
    } else {
      this.mobileCardIndex++;
      this.playersCarousel.pop();
      this.playersCarousel.push(playersList[this.mobileCardIndex]);
    }
  }

  previousPlayerMobile() {
    if(this.mobileCardIndex === 0) {
      this.mobileCardIndex = (playersList.length - 1);
      this.playersCarousel.pop();
      this.playersCarousel.push(playersList[playersList.length - 1]);
    } else {
      this.mobileCardIndex--;
      this.playersCarousel.pop();
      this.playersCarousel.push(playersList[this.mobileCardIndex]);
    }
  }
}
