var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function createPerson(name, age, isActive) {
    return {
        name: name,
        age: age,
        isActive: isActive
    };
}
var newPerson = createPerson('Олександр', 31, false);
console.log(newPerson); // { name: 'Олександр', age: 31, isActive: false }
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
function LogMethodCalls(method, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling \"".concat(context.name, "\" with arguments: ").concat(args.join(', ')));
        return method.apply(this, args);
    };
}
var Calculator = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _add_decorators;
    var _multiply_decorators;
    return _a = /** @class */ (function () {
            function Calculator() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Calculator.prototype.add = function (a, b) {
                return a + b;
            };
            Calculator.prototype.multiply = function (a, b) {
                return a * b;
            };
            return Calculator;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _add_decorators = [LogMethodCalls];
            _multiply_decorators = [LogMethodCalls];
            __esDecorate(_a, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: function (obj) { return "add" in obj; }, get: function (obj) { return obj.add; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _multiply_decorators, { kind: "method", name: "multiply", static: false, private: false, access: { has: function (obj) { return "multiply" in obj; }, get: function (obj) { return obj.multiply; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var calculator = new Calculator();
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
var UserProfile;
(function (UserProfile) {
    function createProfile(name, email) {
        return {
            id: generateId(),
            name: name,
            email: email
        };
    }
    UserProfile.createProfile = createProfile;
    function generateId() {
        return Math.random().toString(36).substring(2, 12); // Random 10-character ID
    }
})(UserProfile || (UserProfile = {}));
// Testing UserProfile
var profile = UserProfile.createProfile('John Doe', 'john@example.com');
console.log(profile); // { id: "randomID", name: "John Doe", email: "john@example.com" }
