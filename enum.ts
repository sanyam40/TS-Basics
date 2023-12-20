// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.

// Numeric enums - default
enum namee{
    Sanyam,
    Narang,
    abc
}

console.log(namee.Sanyam); // 0
console.log(namee.Narang); // 1
console.log(namee.abc); // 2

// Numeric enums - intialized
enum namee1{
    Sanyam = 1,
    Narang,
    abc
}

console.log(namee1.Sanyam); // 1
console.log(namee1.Narang); // 2

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically.

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }

// String Enums
// In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

console.log(Direction.Up); // UP  