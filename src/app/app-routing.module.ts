import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { DummyComponent } from './pages/components/dummy/dummy.component';
import { ProductsComponent } from './pages/components/products/products.component';

const routes: Routes = [
  // {path:"", pathMatch:"full",redirectTo:"navbar"},
  // {path:"navbar",component:NavbarComponent},
  {path:"dummy",component:DummyComponent},
  {path:"products", component:ProductsComponent},
  {path:"productsCategory", component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
