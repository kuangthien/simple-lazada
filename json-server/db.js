// index.js

var faker = require("faker");

module.exports = () => {
  const data = { products: [] };
  for (let i = 0; i < 12; i++) {
    const price = faker.random.number() * 1000;
    data.products.push({
      _id: faker.random.uuid(),
      imageUrl: "https://loremflickr.com/320/240/car?random=" + i,
      title: faker.commerce.productName(),
      desc: faker.lorem.paragraphs(),
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
