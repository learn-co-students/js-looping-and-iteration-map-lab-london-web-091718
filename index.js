// Code your solution in this file.
function lowerCaseDrivers(array){
  const new_array = array.map(function(driver){
    return driver.toLowerCase();
  })
  return new_array
}

function nameToAttributes(array){
  const new_array = array.map(function(names){
    const names_array = names.split(" ");
    return {firstName: `${names_array[0]}`, lastName: `${names_array[1]}`}
  })
  return new_array
}

function attributesToPhrase(array){
  const new_array = array.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
  return new_array
}
