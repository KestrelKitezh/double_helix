import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './modules/app-routing.module';
// import {AquilaModule} from './modules/aquila.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './com/footer/footer.component';
import { SideNavComponent } from './com/side-nav/side-nav.component';
import { BlightComponent } from './com/exile/blight/blight.component';
import { HomeComponent } from './com/home/home.component';
import { SkillsComponent } from './com/exile/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideNavComponent,
    BlightComponent,
    HomeComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
    // AquilaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
