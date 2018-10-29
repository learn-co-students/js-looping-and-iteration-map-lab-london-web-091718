function lowerCaseDrivers(drivers){
  drivers.map(driver => driver.name.toLowerCase())
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    const first = driver.split(" ")[0]
    const second = driver.split(" ")[1]
    return {firstName: first; lastName: second}
  })
}

function attributesToPhrase(drivers){
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
