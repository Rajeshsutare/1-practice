import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { DummyComponent } from './pages/components/dummy/dummy.component';

const routes: Routes = [
  // {path:"", pathMatch:"full",redirectTo:"navbar"},
  // {path:"navbar",component:NavbarComponent},
  {path:"dummy",component:DummyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
