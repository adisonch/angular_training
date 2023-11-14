class Point {

  x: number;
  y: number;
  z = 0;

  constructor(x: number, y: number = 0) {
    this.x = x;
    this.y = y;
  }
  
  protected scale(n: number): void {
    this.x = this.x * n;
    this.y = this.y * n;
  }
}

const pt = new Point(10, 6);
console.log(pt.y); // logs 0
pt.x = 0;
pt.y = 7;
// pt.y = "0"; // Type 'string' is not assignable to type 'number'.
