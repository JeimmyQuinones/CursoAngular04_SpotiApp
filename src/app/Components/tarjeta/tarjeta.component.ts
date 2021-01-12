import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
@Input() items;
  constructor( private route: Router) { }

  ngOnInit(): void {
  }
  verArtista(item){
    if(item.type==="artist")
    {
        this.route.navigate(['/artist',item.id]);
    }else{
        
    }
  }

}
