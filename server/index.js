const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose')

const typeDefs= require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { MONGODB } = require('./config.js')



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>({req})
})

mongoose.connect(MONGODB,{ useNewUrlParser: true })
.then(()=>{
    return server.listen({port:8080});
}).then((res)=>{
    console.log(`${res.url}`)
})
