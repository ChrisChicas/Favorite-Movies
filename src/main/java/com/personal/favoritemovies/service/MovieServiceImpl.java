package com.personal.favoritemovies.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.personal.favoritemovies.data.Movie;
import com.personal.favoritemovies.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService{
    @Autowired
    private MovieRepository movieRepository;

    public Movie addMovie(Movie movie){
        return movieRepository.save(movie);
    }

    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    public Movie getMovieById(Long id){
        return movieRepository.findById(id).orElseThrow(null);
    }

    public Movie updateMovie(Movie movie){
        return movieRepository.save(movie);
    }

    public void deleteMovieById(Long id){
        movieRepository.deleteById(id);
    }
}
