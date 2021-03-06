var express = require('express');
var router = express.Router();
const { findDocuments, findDocument, insertDocument } = require('../helpers/MongoDbHelper');

const products = [
  {
    id: 1,
    name: 'Kids Dress',
    coverImageUrl: 'https://ae01.alicdn.com/kf/HTB1ZrrYNXXXXXc9aXXXq6xXFXXXP/New-2016-Hot-Sale-Kids-Overalls-Spring-Autumn-Denim-Jumpsuit-Kids-Children-Cotton-Loose-Blue-Jeans.jpg',
    price: 25,
    status: 'In stock',
    color: '#7432C5',
    sizes: ['M', 'L'],
    freeShip: true,
  },
  {
    id: 2,
    name: 'Kids Jumpsuit',
    coverImageUrl: 'https://ae01.alicdn.com/kf/HTB1ZrrYNXXXXXc9aXXXq6xXFXXXP/New-2016-Hot-Sale-Kids-Overalls-Spring-Autumn-Denim-Jumpsuit-Kids-Children-Cotton-Loose-Blue-Jeans.jpg',
    price: 39,
    status: 'In stock',
    color: 'red',
    sizes: ['M', 'L', 'XL'],
    freeShip: false,
  },

  {
    id: 3,
    name: 'Kids Jeans',
    coverImageUrl: 'https://ae01.alicdn.com/kf/HTB1ZrrYNXXXXXc9aXXXq6xXFXXXP/New-2016-Hot-Sale-Kids-Overalls-Spring-Autumn-Denim-Jumpsuit-Kids-Children-Cotton-Loose-Blue-Jeans.jpg',
    price: 19,
    status: 'In stock',
    color: 'green',
    sizes: ['S', 'M'],
    freeShip: true,
  },
];

router.get('/', function (req, res) {
  res.status(200).json({ ok: true, products });
});

router.get('/popular', function (req, res) {
  res.status(200).json({
    ok: true,
    products: [
      {
        id: 1,
        name: 'Hamburger',
        description: 'Chicken patty hamburger',
        price: 15.99,
        calories: 78,
        imageUrl: 'https://training.softech.cloud/images/products/1.png',
      },
      {
        id: 2,
        name: 'Hot Tacos',
        description: 'Mexican tortilla & tacos',
        price: 10.99,
        calories: 78,
        imageUrl: 'https://training.softech.cloud/images/products/2.png',
      },

      {
        id: 3,
        name: 'Wrap Sandwich',
        description: 'Grilled vegetables sandwich',
        price: 10.99,
        calories: 65,
        imageUrl: 'https://training.softech.cloud/images/products/3.png',
      },
    ],
  });
});

router.get('/recommended', function (req, res) {
  res.status(200).json({
    ok: true,
    products: [
      {
        id: 1,
        name: 'Wrap Sandwich',
        description: 'Grilled vegetables sandwich',
        price: 10.99,
        calories: 78,
        imageUrl: 'https://training.softech.cloud/images/products/1.png',
      },
      {
        id: 2,
        name: 'Hot Tacos',
        description: 'Mexican tortilla & tacos',
        price: 10.99,
        calories: 78,
        imageUrl: 'https://training.softech.cloud/images/products/2.png',
      },

      {
        id: 3,
        name: 'Hamburger',
        description: 'Chicken patty hamburger',
        price: 15.99,
        calories: 78,
        imageUrl: 'https://training.softech.cloud/images/products/3.png',
      },
    ],
  });
});

router.get('/:id', function (req, res) {
  findDocument(req.params.id, 'products')
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        error: error,
      });
    });
});

router.post('/', function (req, res) {
  var data = req.body;
  insertDocument(data, 'products')
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        error: error,
      });
    });
});

module.exports = router;
