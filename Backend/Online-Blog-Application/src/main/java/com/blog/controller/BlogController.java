package com.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.entity.BlogEntity;
import com.blog.model.BlogModel;
import com.blog.service.BlogService;

import jakarta.persistence.EntityNotFoundException;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/")
@Slf4j
@CrossOrigin("*")
public class BlogController
{
	@Autowired
	private BlogService blogService;

	@GetMapping("test")
	public ResponseEntity<String> test()
	{
		return ResponseEntity.ok("Jai Bajrang Bali");
	}

	@PostMapping("/newBlog")
	public ResponseEntity<?> addNewBlog(@RequestBody BlogModel blogModel)
	{
		log.info("Inside addNewBlog() method of BlogController");
		try
		{
			BlogModel response = blogService.addNewBlog(blogModel);
			log.info("New Blog Created");
			return ResponseEntity.status(HttpStatus.CREATED).body(response);
		} catch (Exception ex)
		{
			ex.printStackTrace();
			return ResponseEntity.internalServerError().body("Error Occured!");
		}
	}

	@GetMapping("/allBlogs")
	public ResponseEntity<?> getAllBlogs()
	{
		log.info("Inside getAllBlogs() method of BlogController");
		try
		{
			List<BlogEntity> response = blogService.getAllBlogs();
			log.info("Received All Blogs");
			return ResponseEntity.status(HttpStatus.OK).body(response);
		} catch (Exception ex)
		{
			ex.printStackTrace();
			return ResponseEntity.internalServerError().body("Error Occured!");
		}
	}

	@GetMapping("allBlogs/{postId}")
	public ResponseEntity<?> getPostById(@PathVariable Long postId) 
	{
		try 
		{
			BlogEntity post = blogService.getBlogById(postId);
			return ResponseEntity.ok(post);
		} 
		catch (EntityNotFoundException e) 
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body (e.getMessage());
		}
	}
	
	@PutMapping("allBlogs/{blogId}/like")
	public ResponseEntity<?> likeBlog(@PathVariable Long blogId) 
	{
		try 
		{
			blogService.likeBlog(blogId);
			return ResponseEntity.ok(new String[] {"Blog Liked Successfully"});
		} 
		catch (EntityNotFoundException e) 
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body (e.getMessage());
		}
	}
	
	@GetMapping("search/{title}")
	public ResponseEntity<?> searchByTitle(@PathVariable String title)
	{
		try
		{
			return ResponseEntity.status(HttpStatus.OK).body(blogService.searchByTitle(title));
		}
		catch(Exception e)
		{
			return ResponseEntity.internalServerError().build();
		}
		
	}
}
