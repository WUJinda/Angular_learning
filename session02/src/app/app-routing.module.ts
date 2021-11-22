import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'favorite-color-form', component: FormComponent },
];

const routes_new: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products-list', component: ProductsListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes_new)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
