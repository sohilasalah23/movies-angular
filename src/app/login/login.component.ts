import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isnotvalidform:boolean=false
  isloading:boolean=false
  APIerrer:string=""

constructor(private _authService:AuthService , private _router:Router) {
  
}



  loginform :FormGroup =new FormGroup ({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    
  })

  


  loginuser(form:FormGroup){
    console.log("hiii" , form);

    if (form.valid) {
      this._authService.login(form.value).subscribe({
        next:(res)=>{console.log(res)
          localStorage.setItem("usertoken",res.token)
          this._authService.getuserdata()
          this._router.navigate(["/home"])}
      ,
      error:(err)=>{console.log(err)
        this.APIerrer= err.error.message
        console.log( err.error.message);
        
      
        this.isloading=false
      }
        
      })
      
    }
    

  }

}
