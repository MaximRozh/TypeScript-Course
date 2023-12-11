// Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color, name) {
        this.color = color;
        this.name = name;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color) {
        var _this = _super.call(this, color, "Circle") || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height, color) {
        var _this = _super.call(this, color, "Rectangle") || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.print = function () {
        return "Rectangle Area = width (".concat(this.width, ") * height (").concat(this.height, ")");
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side, color) {
        var _this = _super.call(this, color, "Square") || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.calculateArea = function () {
        return this.side * this.side;
    };
    Square.prototype.print = function () {
        return "Square Area = side (".concat(this.side, ") * side (").concat(this.side, ")");
    };
    return Square;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(base, height, color) {
        var _this = _super.call(this, color, "Triangle") || this;
        _this.base = base;
        _this.height = height;
        return _this;
    }
    Triangle.prototype.calculateArea = function () {
        return (this.base * this.height) / 2;
    };
    return Triangle;
}(Shape));
