package com.blog.model;

import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BlogModel
{
	private Long id;

	private String blogTitle;

	private String blogContent;

	private String blogPostedBy;

	private Date postDate;

	private int likes;

	private int views;

	private List<String> tags;
}
