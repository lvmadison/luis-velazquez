import express from 'express';

//Initializes express application. Object named app. 
const app = express();

// API endpoints
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

// Connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));