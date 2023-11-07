let x = 10;
var y = 200.0; // ! do not use var, use let instead

const t = [1, 2, 3];
t = ["a", "b"]; // ! error because it's a const
t.push(4); // ok

const meal = { name: "sandwich" };
meal = { name: "soup" }; // ! error
meal.name = "soup"; // ok


// var scoping issue
if (true) {
  var a = 0;
}

for (let i = 0; i < 5; i++) {
  a = a + i;
}
