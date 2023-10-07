import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.scss']
})
export class MovieDetialsComponent implements OnInit{
  item_id:string=""
  itemdetails:any={}
  itemType:string=""
  isopen:boolean=true

  constructor(private  _activatedRoute:ActivatedRoute , private _moviesService:MoviesService ,private _router:Router){
    this._activatedRoute.paramMap.subscribe({
      next:(res:any)=>{console.log(res.params);
        this.item_id=res.params.id
          this.itemType=res.params.type

        if(res.params.type=="undefined"){
          this.itemType="tvshow"
          console.log(this.itemType)
        }else{
          this.itemType=res.params.type

        }
      }
    })
  }
  ngOnInit(): void {
   if (this.itemType=='movie') {
    this.getmoviesDetials() 
   }else{
    this.gettvDetials()
   }
  }
getmoviesDetials(){
this._moviesService.getItemById('movie',this.item_id).subscribe({
  next:(res)=>{console.log(res)
  this.itemdetails=res
  }
})
}

gettvDetials(){
  this._moviesService.getItemById('tv',this.item_id).subscribe({
    next:(res)=>{console.log(res)
    this.itemdetails=res
    }
  })
  }



  closedetials(){
    this.isopen=!this.isopen
    this._router.navigate([`${this.itemType}`])
   
    }
}


