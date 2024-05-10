import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { SearchBlogComponent } from './components/search-blog/search-blog.component';

const routes: Routes = [
  {
    path: 'new-blog',
    component: NewBlogComponent,
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'view/:id',
    component:ViewPostComponent
  },
  {
    path:'search',
    component:SearchBlogComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
