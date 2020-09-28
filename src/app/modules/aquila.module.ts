import { NgModule } from '@angular/core';
import { NxIconModule } from '@aposin/ng-aquila/icon'; 
import { NxToolbarModule } from '@aposin/ng-aquila/toolbar';
import { NxActionModule } from '@aposin/ng-aquila/action';
import { NxSidebarModule  } from '@aposin/ng-aquila/sidebar';


@NgModule({
  declarations: [],
  imports: [
    NxIconModule,
    NxToolbarModule,
    NxActionModule,
    NxSidebarModule,
  ],
  exports: [
    NxIconModule,
    NxToolbarModule,
    NxActionModule,
    NxSidebarModule,
  ]
})
export class AquilaModule { }
