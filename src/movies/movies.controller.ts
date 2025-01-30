import { Controller, Post, Body, Get, Param, Query, Delete } from '@nestjs/common';
import { MovieService } from './movies.service';
import { Movie } from './movies.entity';


@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('search')
  async searchMovies(@Query('query') query: string): Promise<Movie[]> {
    if (!query) {
      throw new Error('Query parameter is required');
    }
    return this.movieService.searchMovies(query);
  }

  @Post('favorite')
  async saveFavorite(@Body() movieData: Partial<Movie>): Promise<Movie> {
    return this.movieService.saveFavoriteMovie(movieData);
  }

  // Endpoint to get all favorite movies
  @Get('favorites')
  async getFavoriteMovies(): Promise<Movie[]> {
    return this.movieService.getAllFavoriteMovies();
  }

  // Endpoint to get a specific favorite movie by Title
  @Get('isInFavorites/:title')
  async getFavoriteMovie(@Param('title') title: string): Promise<Boolean> {
    return this.movieService.getIsFavoriteMovie(title);
  }

  // Endpoint to delete a favorite movie by ID
  @Delete('favorites/:id')
  async deleteFavoriteMovie(@Param('id') id: number): Promise<void> {
    return this.movieService.deleteFavoriteMovie(id);
  }

}
