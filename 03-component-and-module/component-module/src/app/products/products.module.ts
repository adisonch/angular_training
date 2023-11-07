import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDemoComponent } from './product-demo/product-demo.component';
// import { HeaderComponent } from '../main/header/header.component';
import { MainModule } from '../main/main.module';


@NgModule({
  declarations: [
    ProductDemoComponent
  ],
  imports: [
    BrowserModule,
    MainModule
  ],
  exports: [
    ProductDemoComponent
  ]
})
export class ProductsModule { }
