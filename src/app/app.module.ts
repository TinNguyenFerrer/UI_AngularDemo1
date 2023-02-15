import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ParentEventEmitterComponent } from './parent-event-emitter/parent-event-emitter.component';
import { ChillEventEmitterComponent } from './parent-event-emitter/chill-event-emitter/chill-event-emitter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HomeComponent,
    CustomerComponent,
    ParentEventEmitterComponent,
    ChillEventEmitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
