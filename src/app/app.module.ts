import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {AquilaModule} from './modules/aquila.module';
import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './com/footer/footer.component';
import { SideNavComponent } from './com/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
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
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // AquilaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
