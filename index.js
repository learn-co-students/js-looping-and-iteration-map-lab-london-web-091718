// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(el => el.toLowerCase())
}

function nameToAttributes(object) {
  return object.map(d => ({ firstName: d.split(' ')[0], lastName: d.split(' ')[1] }))
}

function attributesToPhrase(object) {
  return object.map(d => `${d.name} is from ${d.hometown}`)
}
