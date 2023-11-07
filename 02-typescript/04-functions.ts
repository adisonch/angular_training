// enum
enum Direction {
  East = "EAST",
  West = "WEST",
  South = "SOUTH",
  North = "NORTH",
}

const direction = Direction.East; // tuple
let currentWeather: [string, number, Direction];

currentWeather = ["sunny", 22, Direction.South];

function describeWeather(weather: [string, number, Direction]): void {
  console.log(`The weather is ${weather[0]}, with a temperature of ${weather[1]}`);
}

describeWeather(currentWeather); //logs "The weather is sunny, with a temperature of 22"
describeWeather(direction); // Error
