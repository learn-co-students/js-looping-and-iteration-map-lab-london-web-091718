// Code your solution in this file.

function lowerCaseDrivers(array) {
  return array.map(function(element) {
    return element.toLowerCase();
  });
}

function nameToAttributes(array) {
  return array.map(function(element) {
    let fullName = element.split(" ");
    return { firstName: fullName[0], lastName: fullName[1]} ;
  });
}

function attributesToPhrase(array) {
  return array.map(function(object) {
    return `${object.name} is from ${object.hometown}`
  });
}
