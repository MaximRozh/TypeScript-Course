// Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі

abstract class Shape {
  readonly color: string;
  readonly name: string;

  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }

  abstract calculateArea(): number;
}

interface Printable {
  print(): string;
}

class Circle extends Shape {
  protected radius: number;

  constructor(radius: number, color: string) {
    super(color, "Circle");
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape implements Printable {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number, color: string) {
    super(color, "Rectangle");
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  print(): string {
    return `Rectangle Area = width (${this.width}) * height (${this.height})`;
  }
}

class Square extends Shape implements Printable {
  protected side: number;

  constructor(side: number, color: string) {
    super(color, "Square");
    this.side = side;
  }

  calculateArea(): number {
    return this.side * this.side;
  }

  print(): string {
    return `Square Area = side (${this.side}) * side (${this.side})`;
  }
}

class Triangle extends Shape {
  protected base: number;
  protected height: number;

  constructor(base: number, height: number, color: string) {
    super(color, "Triangle");
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}
