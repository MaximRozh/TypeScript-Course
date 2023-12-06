// Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор.
// Калькулятор повинен мати методи для виконання арифметичних операцій: додавання, віднімання, множення та ділення.
// Потім створіть функцію calculate, яка приймає об'єкт цього типу та виконує операцію і повертає результат.
var _a;
var SimpleCalculator = /** @class */ (function () {
    function SimpleCalculator() {
        this.divide = function (a, b) { return a / b; };
    }
    SimpleCalculator.prototype.add = function (a, b) {
        return a + b;
    };
    SimpleCalculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    SimpleCalculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    return SimpleCalculator;
}());
var OperationsEnum;
(function (OperationsEnum) {
    OperationsEnum["ADD"] = "add";
    OperationsEnum["SUBTRACT"] = "subtract";
    OperationsEnum["MULTIPLY"] = "multiply";
    OperationsEnum["DIVIDE"] = "divide";
})(OperationsEnum || (OperationsEnum = {}));
var operationMap = (_a = {},
    _a[OperationsEnum.ADD] = function (calculator, a, b) { return calculator.add(a, b); },
    _a[OperationsEnum.SUBTRACT] = function (calculator, a, b) { return calculator.subtract(a, b); },
    _a[OperationsEnum.MULTIPLY] = function (calculator, a, b) { return calculator.multiply(a, b); },
    _a[OperationsEnum.DIVIDE] = function (calculator, a, b) { return calculator.divide(a, b); },
    _a);
function calculate(calculator, operation, a, b) {
    if (operation === OperationsEnum.DIVIDE && b === 0) {
        throw new Error("Division by zero");
    }
    var operationFunc = operationMap[operation];
    if (!operationFunc) {
        throw new Error("Invalid operation");
    }
    return operationFunc(calculator, a, b);
}
var calculator = new SimpleCalculator();
var resultAdd = calculate(calculator, OperationsEnum.ADD, 5, 3);
console.log("Add: 5 + 3 = ".concat(resultAdd));
var resultSubtract = calculate(calculator, OperationsEnum.SUBTRACT, 5, 3);
console.log("Subtract: 5 - 3 = ".concat(resultSubtract));
var resultMultiply = calculate(calculator, OperationsEnum.MULTIPLY, 5, 3);
console.log("Multiply: 5 * 3 = ".concat(resultMultiply));
var resultDivide = calculate(calculator, OperationsEnum.DIVIDE, 5, 3);
console.log("Divide: 5 / 3 = ".concat(resultDivide));
var BookServiceImpl = /** @class */ (function () {
    function BookServiceImpl() {
        this.books = [
            { id: 1, title: "Book 1", authorId: 101 },
            { id: 2, title: "Book 2", authorId: 102 },
        ];
        this.authors = [
            { id: 101, name: "Author 1" },
            { id: 102, name: "Author 2" },
        ];
    }
    BookServiceImpl.prototype.getBook = function (id) {
        var book = this.books.find(function (book) { return book.id === id; });
        if (!book) {
            throw new Error("Book not found");
        }
        return book;
    };
    BookServiceImpl.prototype.getAuthor = function (id) {
        var author = this.authors.find(function (author) { return author.id === id; });
        if (!author) {
            throw new Error("Author not found");
        }
        return author;
    };
    return BookServiceImpl;
}());
// // Використання
// const bookService = new BookServiceImpl();
// const book = bookService.getBook(1);
// const author = bookService.getAuthor(book.authorId);
// console.log(`Book: ${book.title}, Author: ${author.name}`);
