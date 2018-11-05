// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(driver => driver.toLowerCase())

}

function nameToAttributes(drivers){

  return drivers.map(driver => {
    let driverObject = {}
    const driverArray = driver.split(" ")
    driverObject.firstName = driverArray[0]
    driverObject.lastName = driverArray[1]
    return driverObject
  })
  
}

function attributesToPhrase(drivers){
  return drivers.map(driver => {
    return `${driver.name} is from ${driver.hometown}`
  })
}
