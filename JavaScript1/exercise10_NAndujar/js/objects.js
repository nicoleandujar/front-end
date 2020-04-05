// Objects

// Question 5
// Build the object with two films.

var pixarMovies = {

  toyStory: {
    movieTitle: "Toy Story",
    releaseYear: 1995,
    mainActors: ["Tom Hanks", "Tim Allen"],
    rating: 100,
    academyAward: false,
    summary: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room."
  },

  aBugsLife: {
    movieTitle: "A Bug\'s Life",
    releaseYear: 1998,
    mainActors: ["Dave Foley", "Kevin Spacey", "Julia Louis-Dreyfus"],
    rating: 92,
    academyAward: false,
    summary: "A misfit ant, looking for warriors to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe."
  }

}

// Question 6
// Add two films using bracket notation.

var findingNemo = {};
findingNemo['movieTitle'] = "Finding Nemo";
findingNemo['releaseYear'] = 2003;
findingNemo['mainActors'] = ["Albert Brooks", "Ellen DeGeneres"];
findingNemo['rating'] = 99;
findingNemo['academyAward'] = true;
findingNemo['summary'] = "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.";

pixarMovies.findingNemo = findingNemo;

var theIncredibles = {};
theIncredibles['movieTitle'] = "The Incredibles";
theIncredibles['releaseYear'] = 2004;
theIncredibles['mainActors'] = ["Craig T. Nelson", "Jason Lee", "Holly Hunter"];
theIncredibles['rating'] = 97;
theIncredibles['academyAward'] = true;
theIncredibles['summary'] = "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.";

pixarMovies.theIncredibles = theIncredibles;


// Add two films using dot notation.
var cars = {};
cars.movieTitle = "Cars";
cars.releaseYear = 2006;
cars.mainActors = ["Owen Wilson", "Paul Newman", "Bonnie Hunt", "Larry the Cable Guy"];
cars.rating = 74;
cars.academyAward = false;
cars.summary = "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family."

pixarMovies.cars = cars

var monstersInc = {};
monstersInc.movieTitle = "Monster\'s Inc.";
monstersInc.releaseYear = 2001;
monstersInc.mainActors = ["Billy Crystal", "John Goodman"];
monstersInc.rating = 96;
monstersInc.academyAward = true;
monstersInc.summary = "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think."

pixarMovies.monstersInc = monstersInc
