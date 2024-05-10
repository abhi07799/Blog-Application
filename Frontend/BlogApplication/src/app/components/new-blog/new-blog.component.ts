import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewBlogService } from '../../services/new-blog.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.scss',
})
export class NewBlogComponent {
  // newBlogForm = FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private newBlogService:NewBlogService,
    private snackBar: MatSnackBar
  ) {}

  newBlogForm = this.formBuilder.group({
    blogTitle: [null, Validators.required],
    blogContent: [null, [Validators.required, Validators.maxLength(5000)]],
    blogPostedBy: [null, Validators.required],
  });

  tags: string[] = [];

  addTag(event: any) {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }
  removeTag(tag: any) {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  createBlog()
  {
    const data:any=this.newBlogForm.value;
    data.tags=this.tags;

    this.newBlogService.createNewBlog(data).subscribe(res=>{
      this.snackBar.open("Blog Created Successfully","Got It!",{
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      this.router.navigateByUrl("/");
    },
    error=>{
      this.snackBar.open("Something Went Wrong!! Please Try Again Later","Got It!",{
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
  }

  
}
