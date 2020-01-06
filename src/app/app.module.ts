import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule}from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PagenotFoundComponent,
    HeaderComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
  {path:'',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'image',component:ImageComponent},
  {path:'Register',component:RegisterComponent},
  {path:'**',component:PagenotFoundComponent}
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
