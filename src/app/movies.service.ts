import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient:HttpClient) { }

gettrending(type:string):Observable<any>{
  return this._httpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
}

getItemById(type:string,id:string):Observable<any>{
  return this._httpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`)

}
   
}
