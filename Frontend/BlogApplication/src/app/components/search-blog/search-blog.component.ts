import { Component } from '@angular/core';
import { NewBlogService } from '../../services/new-blog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrl: './search-blog.component.scss'
})
export class SearchBlogComponent {

  result:any=[];
  title:any="";

  constructor(private postservice: NewBlogService,
    private snackBar:MatSnackBar){}

    searchByTitle ( ) {
    this.postservice.searchByTitle(this.title).subscribe(rs=>
      {
        this.result=rs;
        console.log(rs);        
      },
      error=>{
        this.snackBar.open("Something Went Wrong!!","Ok");
      }
      )
    }
}
