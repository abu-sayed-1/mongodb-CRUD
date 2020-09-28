  // Module No 48/video No 02---set up MongoBd account and create an user----
  // Module No 48/video No 03---connect to cloud database introduction to CRUD----
  // const express = require('express');
  // const MongoClient = require('mongodb').MongoClient;
  // const uri = "mongodb+srv://rakib:lkfjlak7683@cluster0.uj2jz.mongodb.net/rakib?retryWrites=true&w=majority";
  // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });

  // const app = express();

  // app.get('/', (req, res) =>{
  //     res.send('hello I im working')
  // })

  // client.connect(err => {
  //   const collection = client.db("projectbd").collection("products");
  //    const product = ({name:"mango",price:100,quantity:20});
  //    collection.insertOne(product)
  //    .then(result => {
  //      console.log('one product added');
  //    })
  //   console.log(' database collection habizabi');
  //   // client.close();
  // });

  // app.listen(3200)



  //  Module No 48/video No 04
  // const express = require('express');
  // const MongoClient = require('mongodb').MongoClient;
  // const uri = "mongodb+srv://rakib:lkfjlak7683@cluster0.uj2jz.mongodb.net/rakib?retryWrites=true&w=majority";
  // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });

  // const app = express();

  // app.get('/', (req, res) =>{
  //   res.sendFile(__dirname + '/index.html');
  //  })

  // client.connect(err => {
  //   const collection = client.db("projectbd").collection("products");
  //   app.post("/addProduct", (req, res) => {
      
  //     collection.insertOne(product)
  //     .then(result => {
  //       console.log('one product added');
  //     })
  //   })
    
  //   console.log(' database collection habizabi');
  //   // client.close();
  // });

  // app.listen(3200)



  //-- Module No 48/video No 05--save data in database and Read all data
  const express = require('express');
  const bodyParser = require('body-parser');
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://rakib:lkfjlak7683@cluster0.uj2jz.mongodb.net/rakib?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });

  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));

  app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
   })



  client.connect(err => {
    const productCollection = client.db("projectbd").collection("products");
    app.post("/addProduct", (req, res) => {
      const product = req.body;
      // console.log(product);
      productCollection.insertOne(product)
      .then(result => {
        console.log('data added successfully');
        res.send('succuss')
      })
      
    })
    // client.close();
  });

  app.listen(3200)