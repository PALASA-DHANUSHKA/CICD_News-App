package com.klef.fsd.springboot.service;

import com.klef.fsd.springboot.model.NewsArticle; 

import com.klef.fsd.springboot.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {

	@Autowired
	private  NewsRepository newsRepository;
    
    public List<NewsArticle> getAllNews() {
        return newsRepository.findAll();
    }

    public List<NewsArticle> getNewsBySource(String source) {
        return newsRepository.findBySource(source);
    }

    public NewsArticle saveNews(NewsArticle newsArticle) {
        return newsRepository.save(newsArticle);
    }
}
