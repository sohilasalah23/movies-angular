import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movieitem } from '../movieitem';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  allmovies:Movieitem[]=[]

  constructor(private _moviesService:MoviesService){}

ngOnInit(): void {
  this.getmovies()
}
  getmovies(){
    this._moviesService.gettrending("movie").subscribe({
      next:(res)=>{console.log(res.results)
      this.allmovies=res.results},
      error:(err)=>console.log(err)
      
      
    })
  }

}
