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
gettpopular(pagecount:number):Observable<any>{
  return this._httpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=4${pagecount}`)
  // https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
}
getItemById(type:string,id:string):Observable<any>{
  return this._httpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`)

}

searchTv(term:string):Observable<any>{
  return this._httpClient.get(`https://api.themoviedb.org/3/search/tv?api_key=eba8b9a7199efdcb0ca1f96879b83c44&include_adult=false&language=en-US&page=1&query=${term}`)
  // 'https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1
}
   
}
