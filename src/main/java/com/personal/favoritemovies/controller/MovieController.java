package com.personal.favoritemovies.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.personal.favoritemovies.data.Movie;
import com.personal.favoritemovies.service.MovieService;

@RestController
@RequestMapping("/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping
    public List<Movie> getAll(){
        return movieService.getAllMovies();
    }

    @GetMapping("/{id}")
    public Movie getById(@PathVariable Long id){
        return movieService.getMovieById(id);
    }

    @PostMapping
    public Movie create(@RequestBody Movie movie){
        return movieService.addMovie(movie);
    }

    @PutMapping("/{id}")
    public Movie update(@RequestBody Movie movie){
        return movieService.updateMovie(movie);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id){
        movieService.deleteMovieById(id);
    }
}
