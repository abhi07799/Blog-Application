package com.blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blog.entity.BlogEntity;

@Repository
public interface BlogRepository extends JpaRepository<BlogEntity, Long>
{
//	List<BlogEntity> findByBlogTitleLike(String name);
	
	List<BlogEntity> findAllByBlogTitleContaining(String title);
}
