import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { PrecioApiComponent } from './components/precio-api/precio-api.component';
import { PronosticoComponent } from './components/pronostico/pronostico.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SimulacionComponent } from './components/simulacion/simulacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeasonsComponent } from './components/seasons/seasons.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    PrecioApiComponent,
    PronosticoComponent,
    HeaderComponent,
    SimulacionComponent,
    FooterComponent,
    SeasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
