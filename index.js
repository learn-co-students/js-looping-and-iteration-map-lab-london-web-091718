// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map( name => name.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver){
    // fn = driver.split(" ")[0];
    // ln = driver.split(" ")[1];
    return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(d => `${d.name} is from ${d.hometown}`);
}
