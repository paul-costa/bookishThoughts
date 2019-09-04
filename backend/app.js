const express = require('express');
const app = express();


//Avoid CORS fuckery
app.use((req,res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use('/api/getContent', (req,res,next) => {
    const bookinfo= [];
    const reviewsratings= [];
    const commentsnotes= [];

    res.status(200).json({
        message: 'data fetched',
        bookinfo: bookinfo,
        reviewsratings: reviewsratings,
        commentsnotes: commentsnotes
    });
});
 
module.exports=app;