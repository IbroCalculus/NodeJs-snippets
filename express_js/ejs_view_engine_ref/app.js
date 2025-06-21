// npm install ejs --

const express = require('express');
const app = express();

// ============== START ======================

dbURI = 'mongodb+srv://admin:Admin123@cluster0.csblvue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

/*
const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.csblvue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb+srv://admin:Admin123@cluster0.csblvue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/

// ============== END =====================

app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', __dirname + '/views');


app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} request to ${req.path}`);
    next();
});

// This will execute for every request
app.use((req, res, next) => {
    console.log(`New request made`);
    console.log(`host: ${req.host}`);
    console.log(`path: ${req.path}`);
    console.log(`Method: ${req.method}`);
    next();
});

app.use((req, res, next) => {
    console.log("Second middleware");
    next();
});

// Middleware 3 - Runs **after** response is sent
// app.use((req, res, next) => {
//     res.on('finish', () => {
//         console.log("Final Middleware: Response sent to client");
//     });
//     next();
// });


app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {                    // 'finish' is called after middleware is finished
        const duration = Date.now() - start;
        console.log(`Request to ${req.path} took ${duration}ms`);
    });
    next();
});

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' }
      ];
      
    res.render('index', {title: 'Blog Ninja', page_title: 'This is a demo message', blogs: blogs});
    }
);

app.get('/about', (req, res) => {
    res.render('about', {title: 'About', page_title: 'This is a demo message'});
    }
);


app.get('/admin', (req, res) => {
    res.render('admin', {title: 'Admin', page_title: 'This is a demo message'});
    }
);

app.get('/create', (req, res) => {
    res.render('create', {title: 'Create Blog', page_title: 'This is a demo message'});
});


app.get('/old-page', (req, res) => {
    res.redirect('/new-page');
});

app.get('/new-page', (req, res) => {
    res.render('new-page');
});


// Catch-all route for 404 errors using EJS
app.use((req, res) => {
    res.status(404).render('404'); // Use EJS template for 404 error
});

app.listen(3002, '127.0.0.1', () => {
    console.log('Listening on  127.0.0.1:3002');
    }
);
