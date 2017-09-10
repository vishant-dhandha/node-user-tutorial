# Node Tutorial

A simple node.js tutorial for create , read & update user using express & mongoDB.Express is used for creating simple http server , while mongoDB is used for storing data.
We have used express-validation package to validate each & every request i.e. route.
Joi - Object schema description language and validator for JavaScript objects.
Moment to convert date object i.e. specifically used to avoid timezone difference.
Mocha , chai & chai-http  for testing purpose.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install the node & mongoDB to your system. Use this links to install.

[node](https://nodejs.org/en/download/)

[mongoDB](https://docs.mongodb.com/manual/installation/)

### Installing

For setup clone this repo to your machine. & Enter to cloned repo.
To install the packages & to set up environment, run this command in your terminal.

```
npm install
cp .env.sample .env
```

Now edit this .env file & set all the fields required. Then to start our application run this command.
```
npm run start
```

## Running the tests

To run the automated tests run this command in your terminal.

```
npm run test
```

### For Styling we have used ESlint

Run this command in terminal to styling using ESlint.

```
npm run lint
```

## Deployment

To build & deploy this application here are the command to execute.

```
npm run build
npm run deploy
```

## Authors

* [Vishant Dhandha](https://github.com/vishant-dhandha)
