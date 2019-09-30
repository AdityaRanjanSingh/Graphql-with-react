const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://DevTestUser:jCDFDuSDMP0Q4Een@cluster0-gpgqu.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



mongoose.connection.once('open', () => {
    console.log('connected to database')
})
mongoose.connection.on('error', (err) => {
    console.log(`Connection error: ${err.message}`)
});
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
app.listen(4000, () => {
    console.log('inside now listening')
});

