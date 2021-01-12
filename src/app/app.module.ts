import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { ArtistaComponent } from './Components/artista/artista.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { TarjetaComponent } from './Components/tarjeta/tarjeta.component';
import { LoadingComponent } from './Components/shared/loading/loading.component';


//Rutas 
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomSeguroPipe } from './pipes/domseguro.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    TarjetaComponent,
    LoadingComponent,
    NoimagePipe,
    DomSeguroPipe,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
