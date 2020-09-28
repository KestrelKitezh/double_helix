import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AquilaModule} from './modules/aquila.module';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './com/toolbar/toolbar.component';
import { FooterComponent } from './com/footer/footer.component';
import { SidenavComponent } from './com/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AquilaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
