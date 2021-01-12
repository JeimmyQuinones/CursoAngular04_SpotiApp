import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
artist:any[]=[];
loading:boolean;
  constructor( private sotify: SpotifyService) { }

  ngOnInit(): void {
  }
  Buscar(termino:string){
    this.loading=true;
    if(termino!="")
    {
      this.sotify.getArtista(termino)
      .subscribe((data:any)=>{
          this.artist=data;
          this.loading=false;
      });
    }else{
      this.loading=false;
    }
  }

}
