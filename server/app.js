import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

import userRoutes from './routes/users'
import postRoutes from './routes/posts'

const app = express();

// Connect to database
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

// Use morgan and body parser middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Grant ability to send requests to browsers outside of localhost
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE. GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// If request doesn't get handled by the routers above
// throw error
app.use((req, res, next) => {

    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

export default app