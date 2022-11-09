import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

import { RowTitlesComponent } from './row-titles/row-titles.component';
import { TitleComponent } from './row-titles/title/title.component';
import { TitlesSectionComponent } from './titles-section.component';

@NgModule({
  declarations: [
    TitlesSectionComponent,
    RowTitlesComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [TitlesSectionComponent]
})
export class TitlesSectionModule { }
