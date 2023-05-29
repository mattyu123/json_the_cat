const request = require('request');
const userBreed = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${userBreed}`;


request(url, (error,response,body) => {
  const data = JSON.parse(body);

  if (error) {
    console.log("THIS IS THE ERROR:", error);
  
  } else if (typeof data[0] === 'undefined') {
    console.log("breed not found");

  } else {
    console.log(data[0].description);
  }
});