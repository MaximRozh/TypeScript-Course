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
            {
                id: 1,
                title: "1984",
                authorId: 1,
                yearPublished: 1949,
                genre: "Fiction",
                summary: "Cool Book 1",
            },
            {
                id: 2,
                title: "Fahrenheit 451",
                authorId: 2,
                yearPublished: 1953,
                genre: "Science Fiction",
                summary: "Cool Book 2",
            },
        ];
        this.authors = [
            {
                id: 1,
                name: "George Orwell",
                biography: "Biography of Author 1",
            },
            {
                id: 2,
                name: "Ray Bradbury",
                biography: "Biography of Author 2",
            },
        ];
    }
    BookServiceImpl.prototype.getBookById = function (id) {
        var book = this.books.find(function (book) { return book.id === id; });
        if (!book) {
            throw new Error("Book not found");
        }
        return book;
    };
    BookServiceImpl.prototype.addBook = function (book) {
        if (this.books.some(function (b) { return b.id === book.id; })) {
            throw new Error("Book with this ID already exists");
        }
        this.books.push(book);
    };
    BookServiceImpl.prototype.removeBookById = function (id) {
        this.books = this.books.filter(function (book) { return book.id !== id; });
    };
    BookServiceImpl.prototype.searchBooks = function (query) {
        return this.books.filter(function (book) {
            return book.title.toLowerCase().includes(query.toLowerCase());
        });
    };
    BookServiceImpl.prototype.getAuthor = function (id) {
        var author = this.authors.find(function (author) { return author.id === id; });
        if (!author) {
            throw new Error("Author not found");
        }
        return author;
    };
    BookServiceImpl.prototype.searchAuthors = function (query) {
        return this.authors.filter(function (author) {
            return author.name.toLowerCase().includes(query.toLowerCase());
        });
    };
    return BookServiceImpl;
}());
var bookService = new BookServiceImpl();
var book = bookService.getBookById(1);
var author = bookService.getAuthor(book.authorId);
console.log("Book: ".concat(book.title, ", Author: ").concat(author.name));
