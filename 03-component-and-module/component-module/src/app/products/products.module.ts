import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDemoComponent } from './product-demo/product-demo.component';
// import { HeaderComponent } from '../main/header/header.component';
import { MainModule } from '../main/main.module';
import { HeaderComponent } from '../main/header/header.component';


@NgModule({
  declarations: [
    ProductDemoComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    MainModule
  ],
  exports: [
    ProductDemoComponent
  ],
  providers: [
    
  ]
})
export class ProductsModule { }
