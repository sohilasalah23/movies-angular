import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { authGuard } from './authGuard';
import { MovieDetialsComponent } from './movie-detials/movie-detials.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"movies",canActivate:[authGuard],component:MoviesComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"home",canActivate:[authGuard],component:HomeComponent},
  {path:"tvshow",canActivate:[authGuard],component:TvshowComponent},
  {path:"movie",canActivate:[authGuard],component:MoviesComponent},
  {path:"movie-detials/:id/:type",canActivate:[authGuard],component:MovieDetialsComponent},






  
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
