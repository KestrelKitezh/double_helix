import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../com/home/home.component'
import { BlightComponent } from '../com/exile/blight/blight.component';
import { SkillsComponent } from '../com/exile/skills/skills.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'exile/blight', component: BlightComponent },
  { path: 'exile/skills', component: SkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
