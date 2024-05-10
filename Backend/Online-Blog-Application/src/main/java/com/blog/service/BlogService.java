package com.blog.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.entity.BlogEntity;
import com.blog.model.BlogModel;
import com.blog.repository.BlogRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class BlogService
{
	@Autowired
	private BlogRepository blogRepo;

	@Autowired
	private ModelMapper modelMapper;

	public BlogModel addNewBlog(BlogModel blogModel)
	{
		blogModel.setLikes(0);
		blogModel.setViews(0);
		blogModel.setPostDate(new Date());

		BlogEntity entity = modelMapper.map(blogModel, BlogEntity.class);

		return modelMapper.map(blogRepo.save(entity), BlogModel.class);
	}

	public List<BlogEntity> getAllBlogs()
	{

		List<BlogEntity> entity = blogRepo.findAll();

		return entity;
	}

	public BlogEntity getBlogById(Long BlogEntityId)
	{
		Optional<BlogEntity> optionalBlogEntity = blogRepo.findById(BlogEntityId);
		if (optionalBlogEntity.isPresent())
		{
			BlogEntity blogEntity = optionalBlogEntity.get();
			blogEntity.setViews(blogEntity.getViews() + 1);
			return blogRepo.save(blogEntity);
		} else
		{
			throw new EntityNotFoundException("Blog not found");
		}
	}
	
	public void likeBlog(Long BlogEntityId)
	{
		Optional<BlogEntity> optionalBlogEntity = blogRepo.findById(BlogEntityId);
		if (optionalBlogEntity.isPresent())
		{
			BlogEntity blogEntity = optionalBlogEntity.get();
			blogEntity.setLikes(blogEntity.getLikes() + 1);
			blogRepo.save(blogEntity);
		} else
		{
			throw new EntityNotFoundException("Blog not found");
		}
	}
	
	public List<BlogEntity> searchByTitle(String title)
	{
		return blogRepo.findAllByBlogTitleContaining(title);
	}

//	public List<BlogEntity> getBlogByName(String name)
//	{
//		List<BlogEntity> blogs = blogRepo.findByBlogTitleLike(name);
//		List<BlogEntity> response=new ArrayList<>();
//
//		if (blogs.size() > 0)
//		{
//			for (BlogEntity blog : blogs)
//			{
//				int viewCount=blog.getViews();
//				blog.setViews(viewCount+1);
//				BlogEntity entity = blogRepo.save(blog);
//				response.add(entity);
//			}
//			return response;
//		}
//		else
//		{
//			throw new EntityNotFoundException("No Blogs With This Name");
//		}
//	}

}
