const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib'

request(url, (response, body) => {
  // console.log(response)
  console.log(typeof body)
})