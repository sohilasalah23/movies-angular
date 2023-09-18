import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MovieDetialsComponent } from './movie-detials/movie-detials.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ItemComponent } from './item/item.component';
import { LoadingComponent } from './loading/loading.component'
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MoviesComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    MovieDetialsComponent,
    NotfoundComponent,
    TvshowComponent,
    ItemComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorInterceptor,
    multi:true,
 }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
