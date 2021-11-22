import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { TemplateDemoComponent } from './components/template-demo/template-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    CounterComponent,
    ProductsListComponent,
    ProductComponent,
    TemplateDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
