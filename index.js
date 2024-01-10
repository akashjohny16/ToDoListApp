const express = require('express');
const app = express();

//Code for accessing CSS
app.use("/static", express.static("public"));

app.use(express.urlencoded({extended: true}));



// View engine configuration
app.set("view engine", "ejs");

// GET method
app.get('/', (req,res) => {
    res.render('todo.ejs');
});

//POST method
app.post('/', (req, res) => {
    console.log(req.body);
})


app.listen(3000, () => console.log('Server is running'));



