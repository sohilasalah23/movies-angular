import { Component, Input } from '@angular/core';
import { Movieitem } from '../movieitem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() info:Movieitem = {}

}
