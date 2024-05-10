import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
const BASE_URL = "http://localhost:8080/api/v1/";

@Injectable({
  providedIn: 'root'
})


export class NewBlogService {

  constructor(private http:HttpClient) { }

  createNewBlog(data:any):Observable<any>
  {
      return this.http.post(BASE_URL+"newBlog",data);
  }

  getAllBlogs():Observable<any>
  {
    return this.http.get(BASE_URL+"allBlogs");
  }

  getBlogById(blogId:number):Observable<any>
  {
    return this.http.get(BASE_URL+`allBlogs/${blogId}`);
  }

  likeBlog(blogId:number):Observable<any>
  {
    return this.http.put(BASE_URL+`allBlogs/${blogId}/like`,{});
  }

  searchByTitle(blogTitle:string):Observable<any>
  {
    return this.http.get(BASE_URL+`search/${blogTitle}`);
  }
}
