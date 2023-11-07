interface Wind {
  direction: string;
  speed: number;
}

let currentWind: Wind | undefined;
console.log(currentWind.direction); // [ERR] Object is possibly 'undefined'.
console.log(currentWind?.direction); // logs undefined
