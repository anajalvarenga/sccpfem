import { ITitle } from './../../../../interfaces/ITitle';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-row-titles',
  templateUrl: './row-titles.component.html',
  styleUrls: ['./row-titles.component.scss']
})
export class RowTitlesComponent {
  @Input() titles: ITitle[] = [];

  constructor() {}
}
