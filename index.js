// Code your solution in this file.
function lowerCaseDrivers(drivers) {
return drivers.map(driver => driver.toLowerCase());
}
// function lowerCaseDrivers(list) {
//   return list.map(function(driver) {
//     return driver.toLowerCase();
//   });
// }
function nameToAttributes(drivers) {
  return drivers.map(function(element) {
    let fullName = element.split(" ");
    return { firstName: fullName[0], lastName: fullName[1]} ;
  });
}
// function nameToAttributes(list) {
//   return list.map(function(driver) {
//     const driverFirst = driver.split(' ')[0];
//     const driverLast = driver.split(' ')[1];
//
//     return { firstName: driverFirst, lastName: driverLast };
//   });
// }
function attributesToPhrase(drivers){
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
// function attributesToPhrase(drivers) {
//   return drivers.map(function(driver) {
//     return `${driver.name} is from ${driver.hometown}`;
//   });
// }
