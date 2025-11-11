import * as schema from '../src/db/schema'
import { seed } from 'drizzle-seed'
import { db, pool } from '../src/db/db'

export const seedDb = async () => {
    await seed(db, schema).refine((funcs) => ({
        usersTable: {
            columns: {
                age: funcs.int({ minValue:0, maxValue: 120})
            },
            count: 10,
            with: {
                todosTable: 10
            }
        }
    }))
}

seedDb().then( () => {
    console.log("Database seeding completed succesfully!!");
    return pool.end();
}).catch( (error) => {
    console.log("Error seeding database!!", error);
    return pool.end();
} )