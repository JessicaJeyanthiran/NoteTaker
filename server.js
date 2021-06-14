const express = require('express');
const htmlroutes = require('./routes/htmlroutes');
const apiroutes = require('./routes/apiroutes');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use(express.static("public"));
app.use(apiroutes);

app.use("/", htmlroutes);




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}!`);
});

