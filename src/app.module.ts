import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movies/movies.module'; // Import the movie module

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  // Adjust as needed
      port: 5432,
      username: 'postgres',
      password: 'Passw0rd',
      database: 'movie_db',
      entities: [],
      synchronize: true, // For development, sync automatically. Set to false in production.
    }),
    MovieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
