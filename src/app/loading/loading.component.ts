import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isLoading: Subject<boolean> = this._loaderService.isLoading;

  constructor(private _loaderService:LoaderService) {
  }
}
