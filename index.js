// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(names) {
    return names.toLowerCase();
  });
}


// this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with firstName and lastName attributes.

function nameToAttributes(list) {
  return list.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}


// this function takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we are looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN".

function attributesToPhrase(array) {
  return array.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
