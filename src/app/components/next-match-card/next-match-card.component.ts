import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMatch } from 'src/app/interfaces/IMatch';
import { MatchModalComponent } from '../match-modal/match-modal.component';

@Component({
  selector: 'app-next-match-card',
  templateUrl: './next-match-card.component.html',
  styleUrls: ['./next-match-card.component.scss']
})
export class NextMatchCardComponent {

  @Input() match!: IMatch;

  constructor(private dialog: MatDialog) { }

  openModal() {
    this.dialog.open(MatchModalComponent, {
      data: this.match
    });
  }
}
