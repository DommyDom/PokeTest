import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../services/pokemon.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemon:any;
  loading:boolean = false;

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
  }
  
  
  findRandomPokemon(){
	this.loading = true;
	this.pokeService.getPokemon(this.generateRandomNumber()).subscribe(pm=>{
		this.pokemon = pm;
		this.loading = false;
	});
  }
  
  generateRandomNumber(): number{
	return Math.floor(1+Math.random() * Math.floor(802));
  }
  
  getStatSum(arr){
	let x: number = 0;
	for(let i=0;i<arr.length;i++){
		x += arr[i].base_stat;
	}
	
	return x;
  }

}
