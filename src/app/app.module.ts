import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { DummyComponent } from './pages/components/dummy/dummy.component';
import { EventsDirective } from './directives/events.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    EventsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
