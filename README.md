# RWID NestJS

[![License](https://badgen.net/github/license/ngodingbang/rwid-nestjs 'License')](LICENSE.md)
[![Release](https://badgen.net/github/release/ngodingbang/rwid-nestjs 'Release')](https://github.com/ngodingbang/rwid-nestjs/releases)
[![Test Status](https://github.com/ngodingbang/rwid-nestjs/actions/workflows/main.yml/badge.svg 'Test Status')](https://github.com/ngodingbang/rwid-nestjs/actions/workflows/main.yml)
[![Coverage Status](https://codecov.io/gh/ngodingbang/rwid-nestjs/graph/badge.svg?token=6TZK7PQBR5 'Coverage Status')](https://codecov.io/gh/ngodingbang/rwid-nestjs)

## Table of contents

- [RWID NestJS](#rwid-nestjs)
  - [Table of contents](#table-of-contents)
  - [Description](#description)
  - [Requirements](#requirements)
  - [Project setup](#project-setup)
  - [Compile and run the project](#compile-and-run-the-project)
  - [Database](#database)
    - [Initial setup](#initial-setup)
    - [Migrations](#migrations)
  - [Run tests](#run-tests)
  - [Stay in touch](#stay-in-touch)
  - [API documentation](#api-documentation)
  - [Changelog](#changelog)
  - [License](#license)

## Description

Learn [NestJS](https://nestjs.com) from basic.

## Requirements

- [![Node.js](https://img.shields.io/badge/Node.js%20^22.15.0-43853D?logo=node.js&logoColor=white 'Node.js')](https://nodejs.org)
- [![pnpm](https://img.shields.io/badge/pnpm%20^10.11.0-F69220?logo=pnpm&logoColor=white 'pnpm')](https://pnpm.io)
- [![PostgreSQL](https://img.shields.io/badge/PostgreSQL%2017.5-316192?logo=postgresql&logoColor=white 'PostgreSQL')](https://www.postgresql.org)

## Project setup

```bash
$ cp .env.example .env # Copy .env.example to .env
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run build # Build the project (skip this if `/dist` folder is already exists)
$ pnpm run start:prod
```

Open your browser and navigate to [localhost:3000](http://localhost:3000).

## Database

### Initial setup

```bash
# create database and run migrations
$ pnpm exec prisma migrate dev

# run seed
$ pnpm exec prisma db seed
```

Make sure you have the PostgreSQL environment and already setup these .env configurations below before running the commands above.

```properties
DB_URL=postgresql://root:password@localhost:5432/rwid_nestjs?schema=public
```

This project is using [Prisma](https://prisma.io) as the database tool. Please read their documentation for more information.

### Migrations

Run this command below to generate a new migration file.

```bash
$ pnpm run migration:dev
```

All migrations are stored in `src/prisma/migrations` directory. The migrations directory has the following structure:

```bash
src/
└── prisma/
    └── migrations/
        └── 20250526155757_0_2_0
            └── migration.sql
        └── migration_lock.toml
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Stay in touch

- Author - [NgodingBang](https://threads.net/@ngodingbang)
- Website - [https://ngodingbang.my.id](https://ngodingbang.my.id)

## API documentation

You can access the API documentation here:

- Development - [localhost:3000/api/docs](http://localhost:3000/api/docs).
- Staging - TBD.
- Production - TBD.

## Changelog

You can read the changelog [here](CHANGELOG.md).

## License

You can read the license [here](LICENSE.md).
