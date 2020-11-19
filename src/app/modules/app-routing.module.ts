import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../com/home/home.component'
import { BlightComponent } from '../com/exile/blight/blight.component';
import { SkillsComponent } from '../com/exile/skills/skills.component';
import { ExileBuildingForkComponent } from '../com/exile/exile-building-fork/exile-building-fork.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'exile/blight', component: BlightComponent },
  { path: 'exile/skills', component: SkillsComponent },
  { path: 'exile/building', component: ExileBuildingForkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
