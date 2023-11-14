import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { MainModule } from './main/main.module';
import { ProductsModule } from './products/products.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule
    // MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
