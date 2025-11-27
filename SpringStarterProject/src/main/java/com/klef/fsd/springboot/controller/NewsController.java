package com.klef.fsd.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klef.fsd.springboot.model.NewsArticle;
import com.klef.fsd.springboot.service.NewsService;

@RestController
@RequestMapping("/api/news")
//@CrossOrigin("http://localhost:5173/")
//@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@CrossOrigin(originPatterns = "*", allowCredentials = "true")




public class NewsController {

    @Autowired
    private NewsService newsService;

    @GetMapping
    public List<NewsArticle> getAllNews() {
        return newsService.getAllNews();
    }

    @GetMapping("/{source}")
    public List<NewsArticle> getNewsBySource(@PathVariable String source) {
        return newsService.getNewsBySource(source);
    }

    @PostMapping("/addnews")
    public NewsArticle addNews(@RequestBody NewsArticle newsArticle) {
        return newsService.saveNews(newsArticle);
    }
}
