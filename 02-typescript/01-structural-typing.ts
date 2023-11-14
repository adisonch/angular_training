interface Point {
  x: number;
  y: number;
}

function logPoint(point: any): void {
  console.log(`${point.x}, ${point.y}, ${point.z}`);
} // logs "12, 26"

const force = { y: 26, x: 12 , z: 18 };
logPoint(force);

const myvar: string = '5';

// const color = { hex: "#187ABF" };
// logPoint(color); //error
