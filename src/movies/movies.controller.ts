import { Controller, Get, Query, Post } from '@nestjs/common';
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

}
