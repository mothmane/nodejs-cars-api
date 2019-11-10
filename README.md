

## Description

A NodeJs demo Restfull application with Jest Unit Tests done with  [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

the api is exposing the urls :
```bash
GET     /cars
CET     /cars/:id
POST    /cars
PUT     /cars
DELETE  /cars/:id
GET     /cars/:id/owners
POST    /cars/:id/owners
GET     /cars/:id/manufacturer
POST    /cars/purge-and-discount
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).


## License

  Nest is [MIT licensed](LICENSE).
