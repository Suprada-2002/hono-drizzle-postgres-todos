import * as schema from '../src/db/schema'
import { reset, seed } from 'drizzle-seed'
import { db, pool } from '../src/db/db'

export const seedDb = async () => {

    await reset(db, schema);

    await seed(db, schema).refine((funcs) => ({
        usersTable: {
            columns: {
                age: funcs.int({ minValue:0, maxValue: 120})
            },
            count: 10,
            with: {
                todosTable: 10
            }
        },
        todosTable:{
            columns: {
                title: funcs.valuesFromArray({
                    values:[
                        'Walk the Dog',
                        'Buy Groceries',
                        'Clean the Room',
                        'Learn Drizzle',
                        'Write code'
                    ]
                }),
                description: funcs.valuesFromArray({
                    values:[
                        'very carefully walk the dog and run to have exercies.',
                        'prepare a list and buy the grocey properly',
                        'clean the room properly',
                        'learn drizzle buy watching a video and code',
                        'have and write some code.'
                    ]
                })
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