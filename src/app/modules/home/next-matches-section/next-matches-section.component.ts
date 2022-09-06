import { Component } from '@angular/core';
import { matchesList } from 'src/app/data/matches';

@Component({
  selector: 'app-next-matches-section',
  templateUrl: './next-matches-section.component.html',
  styleUrls: ['./next-matches-section.component.scss']
})
export class NextMatchesSectionComponent {
  matches = matchesList;

  constructor() { }
}
