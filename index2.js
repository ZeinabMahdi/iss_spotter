// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');
// const { nextISSTimesForMyLocation } = require('./index');


const printedTimes = function(times) {
  for (const pass of times) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, times) => {
  if (error) {
    return console.log("It didn't work!", error);
  } else {
    printedTimes(times);
  }
});

nextISSTimesForMyLocation()
  .then((times) => {
    printedTimes(times);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });