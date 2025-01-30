import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movies.entity';

@Injectable()
export class MovieService {
  private readonly omdbApiKey = '871ab3a';

  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  // Fetch list of movies by search query
  async searchMovies(query: string): Promise<Movie[]> {

    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${this.omdbApiKey}`);
    const data = response.data;

    try {
      if (data.Response === 'True') {
        const movies: Movie[] = [];

        // Iterate through the movie results and save them
        for (let movieData of data.Search) {
          const movie = new Movie();
          movie.title = movieData.Title;
          movie.year = movieData.Year;
          movie.poster = movieData.Poster;

          // const savedMovie = await this.movieRepository.save(movie);

          movies.push(movie);
        }

        return movies;
      } else {
        throw new Error('Movies not found');
      }
    } catch (error) {
      throw new Error("THIS IS AN ERROR !");
    }

  }
}
