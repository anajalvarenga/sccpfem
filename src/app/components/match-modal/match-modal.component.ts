import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IMatch } from 'src/app/interfaces/IMatch';

@Component({
  selector: 'app-match-modal',
  templateUrl: './match-modal.component.html',
  styleUrls: ['./match-modal.component.scss']
})
export class MatchModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public matchData: IMatch) { }

}
