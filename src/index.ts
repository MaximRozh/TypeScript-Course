// Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор.
// Калькулятор повинен мати методи для виконання арифметичних операцій: додавання, віднімання, множення та ділення.
// Потім створіть функцію calculate, яка приймає об'єкт цього типу та виконує операцію і повертає результат.

interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
}

class SimpleCalculator implements Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
  subtract(a: number, b: number): number {
    return a - b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
  divide = (a: number, b: number): number => a / b;
}

enum OperationsEnum {
  ADD = "add",
  SUBTRACT = "subtract",
  MULTIPLY = "multiply",
  DIVIDE = "divide",
}

type OperationFunction = (
  calculator: Calculator,
  a: number,
  b: number
) => number;

type OperationMap = {
  [key in OperationsEnum]: OperationFunction;
};

const operationMap: OperationMap = {
  [OperationsEnum.ADD]: (calculator, a, b) => calculator.add(a, b),
  [OperationsEnum.SUBTRACT]: (calculator, a, b) => calculator.subtract(a, b),
  [OperationsEnum.MULTIPLY]: (calculator, a, b) => calculator.multiply(a, b),
  [OperationsEnum.DIVIDE]: (calculator, a, b) => calculator.divide(a, b),
};

function calculate(
  calculator: Calculator,
  operation: OperationsEnum,
  a: number,
  b: number
): number | never {
  if (operation === OperationsEnum.DIVIDE && b === 0) {
    throw new Error("Division by zero");
  }

  const operationFunc = operationMap[operation];
  if (!operationFunc) {
    throw new Error("Invalid operation");
  }

  return operationFunc(calculator, a, b);
}

const calculator = new SimpleCalculator();
const resultAdd = calculate(calculator, OperationsEnum.ADD, 5, 3);
console.log(`Add: 5 + 3 = ${resultAdd}`);
const resultSubtract = calculate(calculator, OperationsEnum.SUBTRACT, 5, 3);
console.log(`Subtract: 5 - 3 = ${resultSubtract}`);
const resultMultiply = calculate(calculator, OperationsEnum.MULTIPLY, 5, 3);
console.log(`Multiply: 5 * 3 = ${resultMultiply}`);
const resultDivide = calculate(calculator, OperationsEnum.DIVIDE, 5, 3);
console.log(`Divide: 5 / 3 = ${resultDivide}`);

// Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги.
// Створіть інтерфейси Book, Author, і BookService, які описують структуру даних книжок, авторів і методи веб-сервісу для отримання інформації про книжки та авторів.
// Потім створіть об'єкт bookService, який імітує роботу веб-сервісу, і використовуйте інтерфейси для отримання інформації про книги та авторів.

interface Book {
  id: number;
  title: string;
  authorId: number;
}

interface Author {
  id: number;
  name: string;
}

interface BookService {
  getBook: (id: number) => Book;
  getAuthor: (id: number) => Author;
}

class BookServiceImpl implements BookService {
  private books: Book[] = [
    { id: 1, title: "Book 1", authorId: 101 },
    { id: 2, title: "Book 2", authorId: 102 },
  ];

  private authors: Author[] = [
    { id: 101, name: "Author 1" },
    { id: 102, name: "Author 2" },
  ];

  getBook(id: number): Book {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  }

  getAuthor(id: number): Author {
    const author = this.authors.find((author) => author.id === id);
    if (!author) {
      throw new Error("Author not found");
    }
    return author;
  }
}

// // Використання
// const bookService = new BookServiceImpl();
// const book = bookService.getBook(1);
// const author = bookService.getAuthor(book.authorId);
// console.log(`Book: ${book.title}, Author: ${author.name}`);
