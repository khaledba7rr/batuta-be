import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
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

          movies.push(movie);
        }

        return movies;
      } else {
        throw new Error('Movies not found');
      }
    } catch (error) {
      throw new Error(error.message);
    }

  }

  async saveFavoriteMovie(movieData: Partial<Movie>): Promise<Movie> {

    const title = movieData.title;

    const movieExist = await this.movieRepository.findOne({ where: { title } });

    if(movieExist){
      throw new ConflictException('Movie already exists');
    }

    const newMovie = this.movieRepository.create(movieData);
    return this.movieRepository.save(newMovie);
  }

  async getAllFavoriteMovies(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async getIsFavoriteMovie(title: string): Promise<Boolean> {
    const movie = await this.movieRepository.findOne({ where: { title } });

    if (!movie) {
      return false;
    }

    return true;
  }

   async deleteFavoriteMovie(id: number): Promise<void> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    await this.movieRepository.remove(movie);
  }

}
