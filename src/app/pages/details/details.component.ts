import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public pokemon: any ;

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'

  constructor(
    private activerouter: ActivatedRoute,
    private pokeapiservice: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getpokemon;
  }


  get getpokemon(){
    const id = this.activerouter.snapshot.params['id'];
    const pokemon = this.pokeapiservice.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeapiservice.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
      }
    );
  }
}
