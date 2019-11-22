# Unkown Quote Tool

Custom software to prepare proposals to sell solutions in the IT Industry.

##### Server - To Do List

- [x] Server Setup `Completed: 2019-11-21`
- [x] Basic Configuration `Completed: 2019-11-21`
- [x] Database Configuration `Completed: 2019-11-22`
- [ ] Models `Started: 2019-11-22 - Completed: TBC`
  - [x] User `Completed: 2019-11-22`
  - [ ] Company
  - [ ] Contact
  - [ ] Proposal
  - [ ] Section
  - [ ] Item
  - [ ] Product
- [ ] Seed
  - [ ] User
  - [ ] Company
  - [ ] Contact
  - [ ] Proposal
  - [ ] Section
  - [ ] Item
  - [ ] Product
- [ ] CRUD
  - [ ] User
  - [ ] Company
  - [ ] Contact
  - [ ] Proposal
  - [ ] Section
  - [ ] Item
  - [ ] Product

#### Dev Setup

**Server**

This application is using a NodeJS Server with the ExpressJS framework.

First navigate to the server folder:

```s
$ cd /src/server
```

Install all dependencies

```s
$ yarn install
```

**Database**

This application is using PostgreSQL DB, and uses a Query Builder called Knex to interact with the database.

First create a volume so we can persist data:

```s
$ docker volume create uqtdata
```

Create a PSQL docker container, this command:

- Attaches the volume
- Exposes the port to your localhost &
- Sets some environment variables for the container

```s
$ docker run --name uqt-db -v uqtdata:/var/lib/postgresql/data -e POSTGRES_USER=uqt -e POSTGRES_PASSWORD=uqt-psql-db -p 5432:5432 -d postgres:latest
```

Create a local development database, these commands:

- Connects to the docker container as the user `uqt` and connects to the default database `postgres`, from there a SQL Command is executed which creates the database.
- Connects to the docker container as the user `uqt` and connects to the default database `postgres`, from there a PSQL Command is executed which lists the database

```s
# This creates the database
$ docker exec -it 203 psql -U uqt postgres -c "CREATE DATABASE uqt_db_dev"

# This checks if the database has been created
$ docker exec -it 203 psql -U uqt postgres -c "\l uqt_db_dev"
```
