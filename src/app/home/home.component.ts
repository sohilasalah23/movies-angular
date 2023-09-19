import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movieitem } from '../movieitem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
   homemovies:Movieitem[]=[]
  //  hometv:Movieitem=[]
   hometv:Movieitem[]=[]
  constructor(private _moviesService:MoviesService){}


  ngOnInit(): void {
this.getmovies()
this.gettv()
   }
   getmovies(){
    this._moviesService.gettrending('movie').subscribe({
      next:(res)=>{
        this.homemovies=res.results.splice(0,10)
        
        
      },
      error:(err)=>console.log(err)
      
    })
   }
   gettv(){
    this._moviesService.gettrending("tv").subscribe({
      next:(res)=>{
    this.hometv=res.results.splice(0,10)
  },
      error:(err)=>console.log(err)
  })}

 }
