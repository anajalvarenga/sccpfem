import { ITitle } from './../../../interfaces/ITitle';
import { Component } from '@angular/core';
import { titleBrasileirao, titleCopaBrasil, titleLibertadores, titlePaulista, titleSuperCopa } from 'src/app/data/titles';

@Component({
  selector: 'app-titles-section',
  templateUrl: './titles-section.component.html',
  styleUrls: ['./titles-section.component.scss']
})
export class TitlesSectionComponent {
  titlesRow1: ITitle[] = [titleLibertadores, titleBrasileirao, titlePaulista];
  titlesRow2: ITitle[] = [titleCopaBrasil, titleSuperCopa];

  constructor() { }
}
