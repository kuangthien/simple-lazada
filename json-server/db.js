// index.js

var faker = require("faker");
 var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

module.exports = () => {
  const data = { products: [] };
  for (let i = 0; i < 12; i++) {
    const price = faker.random.number() * 1000;
    data.products.push({ 
      _id: faker.random.uuid(),
      imageUrl: 'https://loremflickr.com/320/240/fashion?random='+i,
      title: faker.commerce.productName(),
      desc:faker.commerce.product(),
      prices: {
        regular: price,
        old: price * 0.6,
        saleRatio: 32
      },
      additionalInfo: {
        reviews: {
          starStat: 3.15,
          count: 123
        }
      }
    });
  }
  return data;
};
