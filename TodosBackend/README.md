## Steps:
1. create a skeleton hono project
```
bun create hono@latest project-names
```

2. install postgres & drizzle package
```
bun add drizzle-orm pg dotenv
bun add -D drizzle-kit @types/pg drizzle-seed
```

- Schema file written in ts.
- migration for drizzle, it is going to read the file and convert it into raw sql file
- migrate will run sql file in db and create tables & columns