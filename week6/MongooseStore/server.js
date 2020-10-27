const express = require("express")
const methodOverride = require("method-override")
const PORT = 3000;
const app = express();


//MODEL//
const mongoose = require('mongoose');
const { findByIdAndUpdate } = require("./models/shop");
const Product = require("./models/shop");


mongoose.connect('mongodb://localhost:27017/shopDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))


//SEED DATA//
app.get('/products/seed', (req, res) => {
    Product.create([
        {
            name: 'Beans',
            description: 'A small pile of beans. Buy more beans for a big pile of beans.',
            img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
            price: 5,
            qty: 99
        }, {
            name: 'Bones',
            description: 'It\'s just a bag of bones.',
            img: 'http://bluelips.com/prod_images_large/bones1.jpg',
            price: 25,
            qty: 0
        }, {
            name: 'Bins',
            description: 'A stack of colorful bins for your beans and bones.',
            img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
            price: 7000,
            qty: 1
        }
    ])
    res.send(`
    <div>
    <h1>Seed has been created</h1>
    <form action="/products" method="GET">
        <input type="submit" value="Go To Products"> 
    </form>
    </div>
    `)
});



// APP ROUTES //

// index page
app.get("/products", (req, res) => {
    Product.find({}, (err, data) => {
        if (!err) {
            res.render("index.ejs", {
                product: data
            })
        } else {
            console.log("find data error", err);
        }
    })
})

// create/new product view
app.get("/products/new", (req, res) => {
    res.render("new.ejs")
})

// create/post route
app.post("/products", (req, res) => {
    console.log(req.body);
    Product.create(req.body, (err, respond) => {
        if (!err) {
            console.log("new item is created", req.body);
        } else {
            console.log(err);
        }
    })
    res.redirect("/products")
})

// edit view
app.get("/products/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        id: req.params.id
    })
})

// edit/put route
app.put("/products/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, res) => {
        if (!err) console.log("The item has been updated");
        console.log("update error", err);
    })
})


// show
app.get("/products/:title", (req, res) => {
    Product.find({ name: req.params.title }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("data", data);
            res.render("show.ejs", {
                product: data[0]
            })
        }
    })
})


// delete
app.delete("/products/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, response) => {
        console.log("An Item has been deleted");
        res.redirect("/products")
    })
})

app.listen(PORT, () => {
    console.log("Server is up and running on port", PORT);
})




