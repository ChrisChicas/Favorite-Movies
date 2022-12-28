package com.personal.favoritemovies.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.personal.favoritemovies.data.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{}
