import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Questions from './questions.js';
import Sets from './sets.js';

//app config
const app = express();
const port = process.env.PORT || 8001;
//connection url here
const url = "mongodb+srv://admin:***REMOVED***@cluster0.mz4hd.mongodb.net/music-app?retryWrites=true&w=majority";

//middlewares
app.use(express.json());
app.use(cors());

//db connection (mongoose)
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

//api endpoints
app.get('/questions', (req, res) => {
    Questions.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    })
});

app.post('/questions', (req, res) => {
    const question = req.body;

    Questions.create(question, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })

});

app.get('/sets', (req, res) => {
    Sets.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    })
});

app.post('/sets', (req, res) => {
    const set = req.body;
    Sets.create(set, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })
});


//listener (this always comes last)
app.listen(port, () => {
    console.log(`listening on localhost: ${port}`);
});