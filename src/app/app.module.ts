import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BetSystemComponent } from './betSystem/betSystem.component';
import { NumSelectionComponent } from './numSelection/numSelection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BetSystemComponent,
    NumSelectionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
