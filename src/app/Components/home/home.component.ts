import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevascanciones:any[]=[];
  loadin:boolean;
  Error:boolean=false;
  constructor( private spotify:SpotifyService) { 
    this.loadin=true;
    this.spotify.getNewReleases()
    .subscribe((data:any)=>{
        this.nuevascanciones= data;
        this.loadin=false;
    },(error)=>{
      this.Error=true;
      this.loadin=false;
    });
  }

  ngOnInit(): void {

  }

}
