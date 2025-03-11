const convertToCelsius = function(temp) {
  const fraction=5/9;
  return Math.round((((temp-32)*fraction)+Number.EPSILON)*10)/10;
};

const convertToFahrenheit = function(temp) {
  const fraction=9/5;
  return Math.round((((temp*fraction)+32)+Number.EPSILON)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
