import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  configUrl:string;
  
  constructor(public http:HttpClient) { }
	
  getPokemon(id: number){
	this.configUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
	return this.http.get<any>(this.configUrl,{responseType:'json'});
  }
}
