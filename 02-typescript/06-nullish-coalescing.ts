let windSpeed: number | undefined;
console.log(windSpeed ?? "no data yet"); // logs no data yet

// Acquiring data ...
windSpeed = 23;
console.log(windSpeed ?? "no data yet"); // logs 23
