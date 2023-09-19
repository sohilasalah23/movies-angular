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
  pages:number[]=[]
  term:string=""
  termexist:boolean=false


  constructor(private _moviesService:MoviesService){
    this.pages=new Array(10).fill("index").map((ele,index)=>index+1)
    


  }

  search(){
    if (this.term) {
      this._moviesService.searchTv(this.term).subscribe({
        next:(res)=>{console.log("term",res)
          this.alltv=res.results
          console.log(this.term);
          this.termexist=true
          
        },
        error:(err)=>console.log(err)
        
        
      }) 
    }else{
      this.gettv(1)
      this.termexist=false

    }
   
  }

  ngOnInit(): void {
    this.gettv(1)
  }
gettv(pagecount:number){
  this._moviesService.gettpopular(pagecount).subscribe({
    next:(res)=>{
      console.log(res ,"tvshow")
      this.alltv=res.results
    },
    error:(err)=>console.log(err)
  })
}
}
