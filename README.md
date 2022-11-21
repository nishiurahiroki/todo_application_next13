## Settings.

```
yarn

cp .env.local
```

## Start

```
# Start database.
docker-compose up -d

# Db migrate.
yarn db:migrate

# Start Next app.
yarn dev
```
