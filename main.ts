/*
 * #1
 */
interface PersonInterface {
  name: string
  age: number
  isActive: boolean
}

function createPerson(name: string, age: number, isActive: boolean): PersonInterface {
  return {
    name,
    age,
    isActive
  }
}
const newPerson = createPerson('Олександр', 31, false)
console.log(newPerson)  // { name: 'Олександр', age: 31, isActive: false }


/*
 * #2
 *
 * Задача: Розробити клас Calculator з методами add і multiply, які будуть логувати виклики цих методів за допомогою декоратора LogMethodCalls.
 *
 * Мета: Створити клас, що дозволяє виконувати базові арифметичні операції (додавання та множення) та логує деталі їх викликів для подальшого аналізу або дебагінгу.
 *
 * Вимоги до реалізації:
 * 1. Клас Calculator має містити метод add, який приймає два числа як аргументи та повертає їх суму.
 * 2. Клас Calculator має містити метод multiply, який приймає два числа як аргументи та повертає результат їх множення.
 * 3. Обидва методи (add і multiply) мають бути оздоблені декоратором LogMethodCalls. Цей декоратор має логувати ім'я викликаного методу та передані йому аргументи.
 * 4. Декоратор LogMethodCalls має бути реалізований так, щоб він міг бути застосований до будь-якого методу класу. При виклику методу, оздобленого цим декоратором, має виводитись лог у форматі: Calling "<ім'я_методу>" with arguments: <аргументи_методу>.
 * 5. Всі виводи логів мають здійснюватись через console.log.
 *
 */

function LogMethodCalls(
  method: (...args: any[]) => any,
  context: { name: string; kind: 'method' }
): (...args: any[]) => any {
  return function (...args: any[]) {
    console.log(`Calling "${context.name}" with arguments: ${args.join(', ')}`);
    return method.apply(this, args);
  };
}

class Calculator {
  @LogMethodCalls
  add(a: number, b: number): number {
    return a + b;
  }

  @LogMethodCalls
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // Outputs: 5
console.log(calculator.multiply(3, 4)); // Outputs: 12


/*
 * #3
 *
 * Задача: Реалізувати функціонал для створення профілю користувача в просторі імен UserProfile.
 *
 * Мета: Надати можливість створювати об'єкт профілю з унікальним ідентифікатором, ім'ям та електронною поштою.
 *
 * Вимоги до реалізації:
 * 1. Створити namespace UserProfile, що слугуватиме контейнером для визначення інтерфейсу профілю та функцій.
 * 2. Визначити всередині UserProfile інтерфейс ProfileInterface, який має містити властивості id (string), name (string) та email (string).
 * 3. Реалізувати функцію createProfile всередині UserProfile, яка приймає name та email, створює та повертає об'єкт ProfileInterface з унікальним id, вказаним ім'ям та електронною поштою.
 * 4. Функція generateId має бути приватною всередині UserProfile і слугувати для генерації унікального ідентифікатора для кожного профілю.
 *
 */
namespace UserProfile {
  export interface ProfileInterface {
    id: string
    name: string
    email: string
  }

  export function createProfile(name: string, email: string): ProfileInterface {
    return {
      id: generateId(),
      name,
      email
    }
  }

  function generateId(): string {
    return Math.random().toString(36).substring(2, 12)  // Random 10-character ID
  }
}

// Testing UserProfile
const profile = UserProfile.createProfile('John Doe', 'john@example.com')
console.log(profile)  // { id: "randomID", name: "John Doe", email: "john@example.com" }

