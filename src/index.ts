// Фільтрація масиву
// Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.
function filterArray<T>(array: T[], condition: (element: T) => boolean): T[] {
  return array.filter((element) => condition(element));
}

// Узагальнений стек
// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.
class Stack<T> {
  private storage: T[] = [];
  push(item: T): void {
    this.storage.push(item);
  }
  pop(): T | undefined {
    return this.storage.pop();
  }
  peek(): T | undefined {
    return this.storage[this.storage.length - 1];
  }
}

// Узагальнений словник
// Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has.
// Обмежте ключі тільки валідними типами для об'єкта

// class Dictionary<TKey, TValue> {
//   private map = new Map<TKey, TValue>();
//   set(key: TKey, value: TValue): void {
//     this.map.set(key, value);
//   }
//   get(key: TKey): TValue | undefined {
//     return this.map.get(key);
//   }
//   has(key: TKey): boolean {
//     return this.map.has(key);
//   }
// }

class Dictionary<TKey extends string | number | symbol, TValue> {
  private items: Record<TKey, TValue>;
  set(key: TKey, value: TValue): void {
    this.items[key] = value;
  }
  get(key: TKey): TValue | undefined {
    return this.items[key];
  }
  has(key: TKey): boolean {
    return key in this.items;
  }
}
