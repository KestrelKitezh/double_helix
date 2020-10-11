import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DrawerRailModule } from 'angular-material-rail-drawer';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatList, MatListModule} from '@angular/material/list'; 

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    DrawerRailModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
  ],
  exports: [
    MatFormFieldModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    DrawerRailModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
  ]
})
export class MaterialModule { }
