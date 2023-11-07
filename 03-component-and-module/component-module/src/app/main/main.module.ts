import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HomepageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class MainModule { }
