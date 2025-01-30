This is a **NestJS** application for managing a movie favorites list. Users can add movies to their favorites, retrieve them by title, and delete them from the list. This application uses **PostgreSQL** as a database and **TypeORM** for object-relational mapping (ORM). The API is designed to run on **port 4000**.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Request Examples](#request-examples)
- [Database Configuration](#database-configuration)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This NestJS backend application provides the following functionality:
- **Save a movie to favorites**.
- **Retrieve all favorite movies**.
- **Get a specific movie by title**.
- **Delete a movie from favorites by ID**.

The API runs on port 4000 by default. The application uses a **PostgreSQL** database to persist movie data, and **TypeORM** is used for database interaction.

## Technologies Used

- **NestJS**: A framework for building efficient, reliable, and scalable server-side applications using Node.js.
- **TypeORM**: A TypeScript-based ORM for handling interactions with the database.
- **PostgreSQL**: A relational database used to store movie data.
- **dotenv**: For managing environment variables (such as API URLs).


## Installation

Follow these steps to set up the application locally.

### 1. Clone the repository

```bash
git clone direcotry-name
cd directory-name
```

### 2. Run the project

```bash
nest start
```

### 3. App will be ready on localhost 4000