import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { DummyComponent } from './pages/components/dummy/dummy.component';
import { EventsDirective } from './directives/events.directive';
import { ChildComponent } from './pages/components/child/child.component';
import { ParentComponent } from './pages/components/parent/parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    EventsDirective,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
