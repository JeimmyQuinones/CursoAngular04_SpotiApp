import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 

  }
  getQuery (query:string){
    const headers= new HttpHeaders({
      'Authorization':'Bearer BQCR6Nc1LnwWW5CXxSwojsWcepwgB2RI-AiUizG0yQjNW5LL9e58o7xJ3QttTEtUCG36WlEBZ6DkjK9y9m8'
    });
    const url="https://api.spotify.com/v1/"+query;
    return this.http.get(url,{headers});
  }
  getNewReleases()
  {
    return this.getQuery('browse/new-releases').pipe(map( data=>{
      return data['albums'].items;
    }));
    // return this.http.get('browse/new-releases',{headers})
     //.pipe(map( data=>{
       // return data['albums'].items;
     //}));
  }
  getArtista(termino:string)
  {
    return this.getQuery('search?q='+termino+'&type=artist&limit=15').pipe(map( data=>{
      return data['artists'].items;
    }));
  }
  getSelectArtista(id:string){
    return this.getQuery('artists/'+id);
  }
  gettoptraks(id:string){
    return this.getQuery('artists/'+id+'/top-tracks?country=us').pipe(map( data=>{
      return data['tracks'];
    }));;
  }
}
