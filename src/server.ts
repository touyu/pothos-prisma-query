import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { schema } from './schema'

const yoga = createYoga({
    schema,
    context: (req) => {
        return {
            req,
        }
    },
})

const server = createServer(yoga)

server.listen(8888, () => {
    console.log('Visit http://localhost:8888/graphql');
});
