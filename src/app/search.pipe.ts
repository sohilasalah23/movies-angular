import { Pipe, PipeTransform } from '@angular/core';
import { Movieitem } from './movieitem';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(shows: Movieitem[],term:string): Movieitem[] {

    return shows.filter((show)=>(show.name?.toLowerCase().includes(term.toLowerCase())||show.title?.toLowerCase().includes(term.toLowerCase())))
  }

}
