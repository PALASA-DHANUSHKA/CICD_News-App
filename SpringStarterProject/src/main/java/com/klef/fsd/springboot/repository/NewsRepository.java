package com.klef.fsd.springboot.repository;

import com.klef.fsd.springboot.model.NewsArticle;

//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface NewsRepository extends JpaRepository<NewsArticle, Long> {
    List<NewsArticle> findBySource(String source);
}
