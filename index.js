  //  Module No 48/video No 02---set up MongoBd account and create an user----
  // Module No 48/video No 03---connect to cloud database introduction to CRUD----
  const express = require('express');
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://rakib:lkfjlak7683@cluster0.uj2jz.mongodb.net/rakib?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });

  const app = express();

  app.get('/', (req, res) =>{
      res.send('hello I im working')
  })

  client.connect(err => {
    const collection = client.db("projectbd").collection("products");
     const product = ({name:"mango",price:100,quantity:20});
     collection.insertOne(product)
     .then(result => {
       console.log('one product added');
     })
    console.log(' database collection habizabi');
    // client.close();
  });

  app.listen(3200)



  //  Module No 48/video No 04
  const express = require('express');
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://rakib:lkfjlak7683@cluster0.uj2jz.mongodb.net/rakib?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });

  const app = express();

  app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
   })

  client.connect(err => {
    const collection = client.db("projectbd").collection("products");
    app.post("/addProduct", (req, res) => {
      
      collection.insertOne(product)
      .then(result => {
        console.log('one product added');
      })
    })
    
    console.log(' database collection habizabi');
    // client.close();
  });

  app.listen(3200)



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
// --------------------------------------------------------------------------------



  //    Module No 48/video No 06--load data database data and show on the UI
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

    app.get('/products',(req, res) => {
      productCollection.find({}).limit(2)
    .toArray( (err, documents) => {
      res.send(documents);
    })

    })




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

  app.listen(3100)
//--------------------------------------------------------------





  //---- Module No 48/video No 07----delete an item from the database from UI---
  const express = require('express');
  const bodyParser = require('body-parser');
  const MongoClient = require('mongodb').MongoClient;
  const ObjectId = require('mongodb').ObjectId
  // server ^^ theke delete hoiteche na ei karone ObjectId import kora lagche..
  const uri = "mongodb+srv://rakib:lkfjlak7683@cluster0.uj2jz.mongodb.net/rakib?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });
  // const ObjectId = require('mongodb').ObjectId
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));

  app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
   })



  client.connect(err => {
    const productCollection = client.db("projectbd").collection("products");

    app.get('/products',(req, res) => {
      productCollection.find({}).limit(4)
    .toArray( (err, documents) => {
      res.send(documents);
    })

    })




    app.post("/addProduct", (req, res) => {
      const product = req.body;
      // console.log(product);
      productCollection.insertOne(product)
    
      .then(result => {
        console.log('data added successfully');
        res.send('succuss')
      })
        deleteId(productCollection)
    })
    // client.close();
  });

  const deleteId = product => {
    app.delete('/delete/:id', (req, res) => {
      // console.log(req.params.id);
     product.deleteOne({_id: ObjectId(req.params.id)})
      .then (result => {
        console.log(result)
      })
  
    
    })
  }

  app.listen(3100)
// ------------------------------------------------------------------------


//---- Module No 48/video No 08----load single product from database using id
  const express = require('express');
  const bodyParser = require('body-parser');
  const MongoClient = require('mongodb').MongoClient;
  const ObjectId = require('mongodb').ObjectId
  // server ^^ theke delete hoiteche na ei karone ObjectId import kora lagche..
  const uri = "mongodb+srv://rakib:lkfjlak7683@cluster0.uj2jz.mongodb.net/rakib?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });
  // const ObjectId = require('mongodb').ObjectId
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));

  app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
   })



  client.connect(err => {
    const productCollection = client.db("projectbd").collection("products");

    app.get('/products',(req, res) => {
      productCollection.find({})
      // .limit(4)
    .toArray( (err, documents) => {
      res.send(documents);
    })

    })

    // single product  -----
    app.get('/product/:id', (req, res) => {
    //  const num = deleteId(productCollection)
    productCollection.find({_id: ObjectId(req.params.id)})
      .toArray ((err, documents) => {
        res.send(documents[0]);
        console.log(documents)
      })

    })




    app.post("/addProduct", (req, res) => {
      const product = req.body;
      // console.log(product);
      productCollection.insertOne(product)
    
      .then(result => {
        console.log('data added successfully');
        res.send('succuss')
      })
        deleteId(productCollection)
    })
    // client.close();
  });

  const deleteId = product => {
    app.delete('/delete/:id', (req, res) => {
      // console.log(req.params.id);
     product.deleteOne({_id: ObjectId(req.params.id)})
      .then (result => {
        console.log(result)
      })
  
    
    })
  }

  app.listen(3100)













//---- Module No 48/video No 09-update or modify a single item and save database--
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
// server ^^ theke delete hoiteche na ei karone ObjectId import kora lagche..
const uri = "mongodb+srv://rakib:lkfjlak7683@cluster0.uj2jz.mongodb.net/rakib?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });
// const ObjectId = require('mongodb').ObjectId
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/index.html');
 })


// // connect data -----------
client.connect(err => {
  const productCollection = client.db("projectbd").collection("products");

  app.get('/products',(req, res) => {
    productCollection.find({})
    // .limit(4)
  .toArray( (err, documents) => {
    res.send(documents);
  })

  })

  // single product  -----
  app.get('/product/:id', (req, res) => {
  //  const num = deleteId(productCollection)
  productCollection.find({_id: ObjectId(req.params.id)})
    .toArray ((err, documents) => {
      res.send(documents[0]);
      console.log(documents)
    })

  })

// //-01---html er modde ze form er modee ze input er data ache oi data POST kore server e pathai dichi------------------
  app.post("/addProduct", (req, res) => {
    const product = req.body;
    // console.log(product);
    productCollection.insertOne(product)
  
    .then(result => {
      console.log('data added successfully');
      res.send('succuss')
    })
      deleteId(productCollection)
  })
// //-------01-------------------------------------
//   // client.close();
});

// // delete method here-------------------
const deleteId = product => {
  app.delete('/delete/:id', (req, res) => {
    // console.log(req.params.id);
   product.deleteOne({_id: ObjectId(req.params.id)})
    .then (result => {
      console.log(result)
    })

  
app.patch('/update/:id', (req, res)=>{
  // deleteId(productCollection)
  product.updateOne({_id: ObjectId(req.params.id)},
  {
   $set: {price: req.body.price, quantity: req.body.quantity}
  })
  .then(result => {
   console.log(result)
  })
  
  })
  })
}

app.listen(3100)









//---- Module No 48/video No 10/11--Make CRUD operation working smoothly--
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId
// server ^^ theke delete hoiteche na ei karone ObjectId import kora lagche..
const uri = "mongodb+srv://rakib:lkfjlak7683@cluster0.uj2jz.mongodb.net/rakib?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });
// const ObjectId = require('mongodb').ObjectId
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/index.html');
 })


// connect data -----------
client.connect(err => {
  const productCollection = client.db("projectbd").collection("products");

  app.get('/products',(req, res) => {
    productCollection.find({})
    // .limit(4)
  .toArray( (err, documents) => {
    res.send(documents);
  })

  })

  // single product  -----
  app.get('/product/:id', (req, res) => {
  //  const num = deleteId(productCollection)
  productCollection.find({_id: ObjectId(req.params.id)})
    .toArray ((err, documents) => {
      res.send(documents[0]);
      // console.log(documents)
    })

  })

//-01---html er modde ze form er modee ze input er data ache oi data POST kore server e pathai dichi------------------
  app.post("/addProduct", (req, res) => {
    const product = req.body;
    // console.log(product);
    productCollection.insertOne(product)
  
    .then(result => {
      res.redirect('/')
// ei code ^^ diye tumi webPage ke reload korco kno korco ei jonno korcho user zokhon input e new data set kore
//submit korbe thokhon zeno page auto reload niya ney abong new data gulo oi page er modde set kore dey
    })
  })
//-------01-------------------------------------
  // client.close();

// delete method here-------------------
  app.delete('/delete/:id', (req, res) => {
    // console.log(req.params.id);
    productCollection.deleteOne({_id: ObjectId(req.params.id)})
    .then (result => {
      res.send(result.deletedCount > 0);
// এই কোড ইউজ ^^ করলে ডিলিট বাটনে ক্লিক করলে ওই ডাটাটা ডিলিট হয়ে যাবে database থেকে
    })
  });
// patch update here --------------------------------
app.patch('/update/:id', (req, res)=>{
  // deleteId(productCollection)
  productCollection.updateOne({_id: ObjectId(req.params.id)},
  {
   $set: {price: req.body.price, quantity: req.body.quantity}
  })
  .then(result => {
    res.send(result.modifiedCount > 0);
     })
    })
});

app.listen(3700)