const kelvin = 293;
// The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
let celsius = kelvin - 273;
// converting to celcius
let fahrenheit = celsius*(9/5)+32;
// converting to fahrenheit
fahrenheit = Math.floor(fahrenheit);
// rounding the temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius*(33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
