import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BilderComponent} from './bilder/bilder.component';
import {HttpClientModule} from "@angular/common/http";
import { BilderDetailComponent } from './bilder-detail/bilder-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ImagesService} from "./images.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BilderComponent,
    BilderDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
