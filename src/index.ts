// Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком.
// Потім використовуйте її для звуження типу змінної.

function isString(value: any): value is string {
  return typeof value === "string";
}

// звуження типу
function printString(value: any) {
  if (isString(value)) {
    console.log(value);
  } else {
    console.log("Not a string");
  }
}

// У вас є масив з елементами різних типів. Напишіть функцію, яка приймає цей масив і фільтрує його так, щоб у підсумку в ньому залишилися тільки рядки.
// Використовуйте захисника типу для цього завдання.

function filterStrings(arr: any[]): string[] {
  return arr.filter(isString);
}
const mixedArray = ["Hello", 10, "World", true, "!!!"];
const stringArray = filterStrings(mixedArray);
console.log(stringArray);

// У вас є об'єкт, який може містити довільні властивості.
// Напишіть функцію, яка приймає цей об'єкт і повертає значення однієї з властивостей, якщо воно існує і має певний тип.

function getPropertyIfType(obj: any, key: string, type: string): any {
  if (key in obj && typeof obj[key] === type) {
    return obj[key];
  }
  return null;
}
const myObject = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

console.log(getPropertyIfType(myObject, "name", "string"));

// Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта (наприклад, наявність певної властивості або її тип).
// Потім напишіть функцію, яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.

function hasStringProperty(
  obj: any,
  key: string
): obj is { [key: string]: string } {
  return typeof obj[key] === "string";
}

function hasNumberProperty(
  obj: any,
  key: string
): obj is { [key: string]: number } {
  return typeof obj[key] === "number";
}

function hasBooleanProperty(
  obj: any,
  key: string
): obj is { [key: string]: boolean } {
  return typeof obj[key] === "boolean";
}

function processObject(obj: any, key: string): string {
  if (hasStringProperty(obj, key)) {
    return `String property ${key}: ${obj[key]}`;
  } else if (hasNumberProperty(obj, key)) {
    return `Number property ${key}: ${obj[key]}`;
  } else if (hasBooleanProperty(obj, key)) {
    return `Boolean property ${key}: ${obj[key]}`;
  }
  return `Property ${key} not found or has different type`;
}

console.log(processObject(myObject, "age"));

// У вас є змінна, яка може бути одного з декількох типів (наприклад, рядок або число).
// Напишіть функцію, яка приймає цю змінну і виконує довільні операції, специфічні для кожного з типів.

function processVariable(variable: string | number): string {
  if (typeof variable === "string") {
    return `String received: "${variable}". Length: ${variable.length}`;
  } else if (typeof variable === "number") {
    return `Number received: ${variable}. Square: ${variable * 2}`;
  } else {
    return "Unsupported type";
  }
}

console.log(processVariable("Hello, world!"));
console.log(processVariable(2));

// Створіть захисник типу, який перевірятиме, чи є передане значення функцією.
// Потім напишіть функцію, яка використовує цей гард для звуження типу змінної і викликає передану функцію, якщо вона існує.
function isFunction(value: any): value is Function {
  return typeof value === "function";
}

function callFunctionIfExists(func: any): void {
  if (isFunction(func)) {
    func();
  } else {
    console.log("Provided value is not a function.");
  }
}

callFunctionIfExists(() => console.log("Hello, world!"));
callFunctionIfExists(42);

// Створіть класи з ієрархією успадкування і потім напишіть функцію,
// яка використовує захисник типу для звуження типу об'єктів, що базуються на цій ієрархії.

class Animal {
  speak() {
    console.log("Some generic animal sound!");
  }
}

class Dog extends Animal {
  woof() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Meow!");
  }
}

// гвард для Dog
function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

// гвард для Cat
function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}

function makeAnimalSound(animal: Animal): void {
  if (isDog(animal)) {
    animal.woof();
  } else if (isCat(animal)) {
    animal.meow();
  } else {
    animal.speak();
  }
}
const dog = new Dog();
const cat = new Cat();
const unknownAnimal = new Animal();

makeAnimalSound(dog);
makeAnimalSound(cat);
makeAnimalSound(unknownAnimal);
