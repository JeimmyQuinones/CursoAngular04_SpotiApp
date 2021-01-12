import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
artista:any={};
loading:boolean;
toptraks:any={};
  constructor( private router:ActivatedRoute, private sotify: SpotifyService) 
  { 
    let id:string;
    
    this.loading=true;
    this.router.params.subscribe(
      params=>{ id= params['id'];});
      this.getartis(id);
      this.getToptracks(id);

      
    
   }
  getartis(id:string){
    this.loading=true;
       this.sotify.getSelectArtista(id)
        .subscribe(item=>{
          this.artista= item;
          this.loading=false;
        })
  }
  getToptracks(id){
       this.sotify.gettoptraks(id)
        .subscribe(item=>{
          this.toptraks=item;
        })
  }
  ngOnInit(): void {
  }

}
