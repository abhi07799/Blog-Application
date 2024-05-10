import { Component } from '@angular/core';
import { NewBlogService } from '../../services/new-blog.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private blogService: NewBlogService,
    private snackBar: MatSnackBar
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit() {
    this.getAllBlogs();
  }
  allBlogs: any;
  getAllBlogs() {
    this.blogService.getAllBlogs().subscribe(
      (res) => {
        console.log(res);
        this.allBlogs = res;
      },
      (error) => {
        this.snackBar.open(
          'Something Went Wrong!! Please Try Again Later',
          'Got It!',
          {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          }
        );
      }
    );
  }

  // Define an array of image paths
  imagePaths = [
    'assets/gaming.jpg',
    'assets/adventure.jpg',
    'assets/tech.jpg',
    'assets/nature.jpg',
    'assets/nature2.jpeg',
  ];

  // Function to get image path based on index
  getImagePath(index: number): string {
    return this.imagePaths[index % this.imagePaths.length];
  }
}
