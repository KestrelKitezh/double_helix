import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../com/home/home.component'
import { BlightComponent } from '../com/exile/blight/blight.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blight', component: BlightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
