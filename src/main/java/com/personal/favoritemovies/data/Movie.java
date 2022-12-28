package com.personal.favoritemovies.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title", nullable = false, length = 200)
    private String title;

    @Column(name = "submitter", length = 100)
    private String submitter = "Anonymous";

    @Column(name = "poster_url", columnDefinition = "text")
    private String posterUrl = "https://placedog.net/400/400";

    public Movie(){
        super();
    }

    public Movie(String title, String submitter, String posterUrl){
        this.title = title;
        this.submitter = submitter;
        this.posterUrl = posterUrl;
    }

    public Long getId(){
        return id;
    }

    public String getTitle(){
        return title;
    }

    public String getSubmitter(){
        return submitter;
    }

    public String getPosterUrl(){
        return posterUrl;
    }
}
