import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movieitem } from '../movieitem';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {
  @Input() homemovies:Movieitem[] = []

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,

    
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      760: {
        items: 5
      },
      1000:{
        items:7
      },
      1200:{
        items:8
      }
    },
    nav: true
  }

}
