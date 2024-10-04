# web_app_challenge
# React + TypeScript + Vite + nestJS + TypeORM
  This project is a full-stack web application developed using React, JavaScript, Vite, NestJS,TypeORM,and MongoDB.
# Prerequisites
  Docker
  Node.js
  Make
# Getting Started
 1.Clone the repository :

  git clone git@github.com:zel-hach/web_app_challenge.git


  2. Create a file named .env in the project root with the following content :

  POSTGRES_HOST=172.17.0.1   # The host where your PostgreSQL database is running
  POSTGRES_PORT=5432         # The port on which PostgreSQL is listening

  POSTGRES_USER=admin         # The username for connecting to the PostgreSQL database
  POSTGRES_PASSWORD=password123  # The password for the specified username

  POSTGRES_DB=platforme       # The name of the PostgreSQL database

  3. Use the Makefile to run the code :
js
{
  make up 
}