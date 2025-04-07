import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'api-hono'
  })
})


serve({
  fetch: app.fetch,
  port: 8002
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
