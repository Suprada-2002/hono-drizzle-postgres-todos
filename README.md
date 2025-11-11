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