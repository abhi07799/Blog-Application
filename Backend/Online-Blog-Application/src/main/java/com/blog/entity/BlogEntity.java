package com.blog.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "blogs")
@NoArgsConstructor
@Data
@AllArgsConstructor
public class BlogEntity
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "blog_title")
	private String blogTitle;
	
	@Column(name = "blog_",length = 5000)
	private String blogContent;
	
	@Column(name = "blog_posted_by")
	private String blogPostedBy;
	
	@Column(name = "blog_posted_on")
	private Date postDate;
	
	@Column(name = "blog_likes")
	private int likes;
	
	@Column(name = "blog_views")
	private int views;
	
	@Column(name = "blog_category")
	private List<String> tags;
	
	
}
