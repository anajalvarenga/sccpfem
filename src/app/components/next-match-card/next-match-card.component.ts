import { Component, Input } from '@angular/core';
import { IMatch } from 'src/app/interfaces/IMatch';

@Component({
  selector: 'app-next-match-card',
  templateUrl: './next-match-card.component.html',
  styleUrls: ['./next-match-card.component.scss']
})
export class NextMatchCardComponent {

  @Input() match!: IMatch;

  constructor() { }
}
