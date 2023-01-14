import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserComponent } from './user/user.component';
import { ReposListComponent } from './repos-list/repos-list.component';
import { ReposItemComponent } from './repos-list/repos-item/repos-item.component';
import { LoaderComponent } from './loader/loader.component';
import { UserNotFoundComponent } from './user-not-found/user-not-found.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserInputComponent,
    UserComponent,
    ReposListComponent,
    ReposItemComponent,
    LoaderComponent,
    UserNotFoundComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
