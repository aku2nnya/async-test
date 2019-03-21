/*
get a random number less than 10,
wait three seconds
write the number to the hard drive
Then, once all that is done, console log "I'm done!"

CONSTRAINTS
- No using setTimeout (must use waitOneSecond)
- No editing any file except main.js
*/

const getNumLessThanTen = require('./getNumLessThan');
const waitOneSecond = require('./waitOneSecond');
const writeToFile = require('./writeToFile');


getNumLessThanTen((err, randomNumber) => {
  if (err) {
    console.log(err);
  } else {
    console.log(randomNumber);
    waitOneSecond((err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        waitOneSecond((err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            waitOneSecond((err, result) => {
              if (err) {
                console.log(err);
              } else {
                console.log(result);
                console.log(randomNumber);
                writeToFile(randomNumber, (err, result) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log("I'm Done");
                  }
                });
              };
            });
          }
        });
      }
    });
  }
});