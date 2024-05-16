import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./services/PostService";
import {PostListComponent} from "./post-list/post-list.component";
import {PostListItemComponent} from "./post-list-item/post-list-item.component";
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CategoryService} from "./services/CategoryService";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PostListComponent,
    PostListItemComponent,
    AddPostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
