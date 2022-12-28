package com.personal.favoritemovies.service;

import java.util.List;

import com.personal.favoritemovies.data.Movie;

public interface MovieService {
    Movie addMovie(Movie movie);
    List<Movie> getAllMovies();
    Movie getMovieById(Long id);
    Movie updateMovie(Movie movie);
    void deleteMovieById(Long id);
}
