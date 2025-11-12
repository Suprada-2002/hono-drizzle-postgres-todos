import { Hono } from 'hono'
import { getTodosByUserId } from './db/queries'
import type { UUID } from 'crypto'

const app = new Hono()

app.get('/todos', async(c) => {
  const userId = c.req.query('userId');
  if(!userId){
    return c.json({ error:"User Id Not found"}, 400);
  }

  try{
    const todos = await getTodosByUserId(userId as UUID);
    return c.json(todos, 200);
  }catch(error){
    console.error("Error Fetching Todos:", error)
    return c.json({ error: "Internal Server Error"}, 500);
  }
})

export default app
