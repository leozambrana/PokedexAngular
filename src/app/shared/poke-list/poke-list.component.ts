import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {


private setAllPokemons: any;

public getAllPokemons: any;



  constructor(private pokeapiservice: PokeApiService) { }

  ngOnInit(): void {
    this.pokeapiservice.apiListAllPokemons.subscribe(
      res=> {
        this.setAllPokemons= res.results;
        this.getAllPokemons = this.setAllPokemons; 
      }
    );
  }

  public pullPokemon(value: string){
    const filteredPokemons = this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filteredPokemons;
  }

}
