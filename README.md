## InstaGraph Server

This repository is the server side for the InstaGraph application.<br>
This server is exposing Instagram's API using GraphQL and Apollo.<br>

## Usage

Run `npm start`, it will create a local server, than you can go to `http://localhost:4000/graphiql` and use the playground.

## UserSession

In order to save traffic and time, when a user logged into the server the server return a JSON - that is the user session.<br>
After a user got a user session he can work quietly without the need to re-login into Instagram.

## Instagram API

The server is a node server that runs Python scripts.<br>
In case of need it is really easy to write new scripts and add new endpoint to the GraphQL.
