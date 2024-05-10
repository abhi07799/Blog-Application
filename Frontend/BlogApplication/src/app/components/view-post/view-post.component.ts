import { Component } from '@angular/core';
import { NewBlogService } from '../../services/new-blog.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss',
})
export class ViewPostComponent {
  postId = this.activatedRoute.snapshot.params['id'];
  blogData: any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private postService: NewBlogService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    console.log(this.postId);
    this.getBlogById();
  }

  getBlogById() {
    this.postService.getBlogById(this.postId).subscribe(
      (res) => {
        this.blogData = res;
        console.log(res);
      },
      (error) => {
        this.matSnackBar.open('Something Went Wrong!!!!', 'ok');
      }
    );
  }

  likeBlog() {
    this.postService.likeBlog(this.postId).subscribe(
      (res) => {
        this.matSnackBar.open("Blog Liked Successfully","Got It!",{
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.getBlogById();
      },
      (error) => {
        this.matSnackBar.open('Something Went Wrong!!!!', 'ok');
      }
    );
  }
}
