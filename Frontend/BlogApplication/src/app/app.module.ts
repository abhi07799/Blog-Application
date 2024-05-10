import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './AngularMaterialModule';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { SearchBlogComponent } from './components/search-blog/search-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBlogComponent,
    HomeComponent,
    ViewPostComponent,
    SearchBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
