import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsComponent } from './components/details/details.component';

import {PokemonService} from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
