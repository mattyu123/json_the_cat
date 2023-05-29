const {fetchBreedDescription} = require('./breedFetcher.js')
const breedName = process.argv[2]

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("THIS IS THE ERROR:", error);
  } else {
    console.log(description);
  }
});