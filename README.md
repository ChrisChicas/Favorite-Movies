# Favorite Movies
This is a simple decoupled app where users can post their favorite movies! Users can view, add, edit, and delete movies on their lists by using the provided front-end, or through requests made on a separate application like Postman.

## Technologies
This application was built using Spring Boot connected to a PostgreSQL database for the back-end and React for the front-end. Besides this, there were a few other dependencies that were required to allow this app to run smoothly such as a react-router-dom and JPA starter data for Spring Boot. A full list can be found under `build.gradle` for the back-end and under `front-end/package.json` for the front-end.

## Setup
To run this app locally, you will need to do a few steps:
- Clone this repo onto your machine and open it in your code editor of choice
- Create a Postgres database to connect the app to
- Under `src/main` create a folder named `resources` 
- In that new folder, create a file named `application.properties` with the following:
```
spring.jpa.database=POSTGRESQL
spring.datasource.platform= postgres
spring.datasource.url=jdbc:postgresql://localhost:5432/{your database name}
spring.datasource.username={your postgres db username}
spring.datasource.password={your postgres db password}
spring.jpa.show-sql=true
spring.jpa.generate-ddl=true
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true
```
- Copy and paste the same `application.properties` into the `bin/main` folder
- Run the Spring Boot application under `src/main/.../FavoriteMoviesApplication.java`
- In a new terminal, run `cd front-end` to move into the front-end folder
- Run `npm i` or `npm install` to install all the front-end dependencies
- Create a `.env` file in the `front-end` folder with the following:
```
REACT_APP_API=http://localhost:8080
```
- Run `npm start` to run the React app

## Database Table/Model
This application only has one Movie data model. Movie has four columns:
- id (Long)
- title (String, max length = 200)
- submitter (String, max length = 100)
- posterUrl (String, column defined as Text type)

## Front-End Routes
These are all the React app's routes:

| Route | Purpose |
| ----- | ----- |
| / | Home Page |
| /movies | Movie List Page |
| /movies/:movieId | View a specific movie's details + edit/delete buttons |
| /movies/new | Form to add a new movie |
| /movies/:movieId/edit | Form to edit an existing movie |

## Back-End Routes
These are all the Spring Boot controller routes:

| Method | Path | Purpose |
| ----- | ------ | ------ |
| GET | / | Sends welcome message |
| GET | /movies | Returns a list of all movies on the database |
| GET | /movies/{id} | Finds and returns a specific movie instance by id |
| POST | /movies | Saves a movie instance to the database |
| PUT | /movies/{id} | Updates a movie instance in the database (Note: movie instance must include id to properly update an existing movie) |
| DELETE | /movies/{id} | Finds and deletes a movie instance from the database by id |