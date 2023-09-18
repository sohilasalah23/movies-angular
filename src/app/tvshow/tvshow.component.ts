import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movieitem } from '../movieitem';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  alltv:Movieitem[]=[]


  constructor(private _moviesService:MoviesService){}

  ngOnInit(): void {
    this.gettv()
  }
gettv(){
  this._moviesService.gettrending("tv").subscribe({
    next:(res)=>{
      this.alltv=res.results
    },
    error:(err)=>console.log(err)
    

  })
}
}
