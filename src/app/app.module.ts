import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieDetialsComponent } from './movie-detials/movie-detials.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ItemComponent } from './item/item.component';
import { LoadingComponent } from './loading/loading.component'
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MoviesComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MovieDetialsComponent,
    NotfoundComponent,
    TvshowComponent,
    ItemComponent,
    LoadingComponent,
    SeemorePipe,
    SearchPipe,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule 
    
  
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
