import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PrecioApiComponent } from './components/precio-api/precio-api.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SimulacionComponent } from './components/simulacion/simulacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { ForecastComponent } from './components/forecast/forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PrecioApiComponent,
    HeaderComponent,
    SimulacionComponent,
    FooterComponent,
    SeasonsComponent,
    ForecastComponent
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
