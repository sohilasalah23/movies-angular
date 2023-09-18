import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isnotvalidform:boolean=false
  isloading:boolean=false
  APIerrer:string=""


constructor(private _authService:AuthService ,private _router:Router){}



  registerform:FormGroup = new FormGroup( {
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]),
  },{
    validators:this.validaterepassword
  })

  validaterepassword(registerform:any){
    let passwordcontrol = registerform.get("password")
    let repasswordcontrol = registerform.get("rePassword")


    if(passwordcontrol.value==repasswordcontrol.value){
      return null
    }else{
      repasswordcontrol.setErrors({repasswordNotMatch:"password and repassword should be matched"})
      return {repasswordNotMatch:"password and repassword should be matched"}
    }
  }


  registeruser(form:FormGroup){
    console.log("hii" , form);
    if(form.valid){
  this.isloading=true
  console.log(form.value);
  
  this._authService.signup(form.value).subscribe({
    next:(res)=>{console.log( "yes" , res)
  this.isloading=false
  this._router.navigate(["/login"])
},
    error:(err)=>{console.log("no",err)
  this.APIerrer= err.error.message
  console.log( err.error.message);
  

  this.isloading=false

}
    
    
  })

    }
    else{
  this.isnotvalidform=true

    }
    
  }

  

}
