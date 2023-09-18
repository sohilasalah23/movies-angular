import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {


  isloggedin:boolean=false
constructor(private _authService:AuthService){
  this._authService.userdata.subscribe(()=>{
    if (this._authService.userdata.getValue()) {
      this.isloggedin=true
    }else{
      this.isloggedin=false

    }
  })
}



logout(){
  this._authService.logout()
}


}
