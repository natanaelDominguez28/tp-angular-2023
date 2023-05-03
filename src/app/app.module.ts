import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { HeaderComponent } from './components/header/header.component';
import { Punto5Component } from './components/punto5/punto5.component';
import { Punto5FormComponent } from './components/punto5-form/punto5-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Punto1Component,
    Punto2Component,
    HeaderComponent,
    Punto5Component,
    Punto5FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
