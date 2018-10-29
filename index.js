// Code your solution in this file.

function lowerCaseDrivers(array) {
  return array.map(driver => driver.toLowerCase());
}

function nameToAttributes(array){
  return array.map (driver => {
    let name = driver.split(" ");
    return {firstName: name[0], lastName: name[1]};
  });
}


function attributesToPhrase(array){
  return array.map(driver => {
    return `${driver.name} is from ${driver.hometown}`;
  })
}
//
// function attributesToPhrase(array){
//   return array.map(driver => {
//     return {`${capitalizeFirstLetter(driver.name.split(" ")[0])} is from `}
//   })
// }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
