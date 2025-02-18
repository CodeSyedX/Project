require('dotenv').config();

const express = require('express');
const app = express();
const experssLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 5000;  // Use process.env.PORT first, fallback to 5000


app.use(express.static('public'));
//remplating engine
app.use(experssLayout);
app.set('layout' , './layouts/main');
app.set('view engine', 'ejs');


app.use('/' , require('./server/routes/main'))



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
