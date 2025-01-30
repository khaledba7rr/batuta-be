import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movies/movies.module';
import { Movie } from './movies/movies.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Passw0rd',
      database: 'movie_db',
      entities: [Movie],
      synchronize: true,
    }),
    MovieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
