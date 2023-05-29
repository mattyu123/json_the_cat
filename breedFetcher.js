const request = require('request');
const userBreed = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${userBreed}`


request(url, (error,response,body) => {
  const data = JSON.parse(body)
  console.log(data[0].description)

})