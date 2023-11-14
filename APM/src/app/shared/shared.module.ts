import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './convert-to-spaces.pipe';

@NgModule({
  declarations: [
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ConvertToSpaces,
    FormsModule,
    StarComponent
  ]
})
export class SharedModule { }
