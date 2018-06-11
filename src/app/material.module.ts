import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, MatExpansionModule, MatDividerModule, MatListModule],
  exports: [MatButtonModule, MatExpansionModule, MatDividerModule, MatListModule],
})
export class MaterialModule { }