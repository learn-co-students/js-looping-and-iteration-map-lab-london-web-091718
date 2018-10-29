// Code your solution in this file.
function lowerCaseDrivers(info) {

  return info.map( i => i.toLowerCase())
}

function nameToAttributes(drivers) {
  return drivers.map(function(attr) {
    return {firstName: attr.split(" ")[0], lastName: attr.split(" ")[1] }})
}

function attributesToPhrase(drivers) {
  return drivers.map( attr => `${attr.name} is from ${attr.hometown}`)
}
