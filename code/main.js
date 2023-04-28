/*
- Написати функцію `filterBy()`, яка прийматиме 2 аргументи.
Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
- Функція повинна повернути новий масив, який міститиме всі дані,
які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом.
Тобто якщо передати масив ['hello', 'world', 23, '23', null],
і другим аргументом передати 'string', то функція поверне масив [23, null].
*/

'use strict'

let array = [43, 'hello', null, 456, -52, false, 'text', {}, true, undefined];

const filterBy = (arr, type) => arr.filter((elem) => typeof elem !== type)

console.log(filterBy(array, 'number'));

/*
Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, 
вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), 
turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", 
"Поворот праворуч" або "Поворот ліворуч". А також метод toString(), 
який виводить повну інформацію про автомобіль, її водія і двигуна.

Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
https://storage.googleapis.com/www.examclouds.com/oop/car-ierarchy.png
*/

class Driver{
  constructor (fullName, experience) {
    this.fullName = fullName;
    this.experience = experience;
  }
}

const driver1 = new Driver('Заварзіна Христина Андріївна', 8);
const driver2 = new Driver('Коваленко Сергій Олегович', 12);
const driver3 = new Driver('Стожук Світлана Сергіївна', 20);

class Engine{
  constructor (power, company) {
    this.power = power;
    this.company = company;
  }
}

const engine1 = new Engine('122 к.с. (90 кВт) при 5000 об/хв', 'Mercedes-Benz');
const engine2 = new Engine('422 к.с. (170 кВт) при 7000 об/хв', 'BMW');
const engine3 = new Engine('322 к.с. (200 кВт) при 7000 об/хв', 'Porshe');

class Car{
  constructor (marka, carClass, weight, driver, engine) {
    this.marka = marka;
    this.carClass = carClass;
    this.weight = weight;
    this.driver = driver;
    this.engine = engine;
  }

  start() {
    return console.log("Поїхали");
  } 
  
  stop() {
    return console.log("Зупиняємося");
  } 
  
  turnRight() {
    return console.log("Поворот праворуч");
  }
  
  turnLeft() {
    return console.log("Поворот ліворуч");
  }

  toString() {
    console.log(`
    Aвтомобіль:
    водій: ${this.driver.fullName},
    стаж: ${this.driver.experience} років;
    марка: ${this.marka},
    клас: ${this.carClass},
    вага: ${this.weight} кг;
    потужність: ${this.engine.power}, 
    виробник: ${this.engine.company};`);
  }
}

const car1 = new Car('Mercedes-Benz', 'B180', 1400, driver1, engine1);
const car2 = new Car('BMW', 'X7', 3300, driver2, engine2);
const car3 = new Car('Porshe', 'Cayenne', 3400, driver3, engine3);

console.log(car1, car2, car3);
car1.toString();

class Lorry extends Car{
  constructor (marka, carClass, weight, driver, engine, carrying) {
    super(marka, carClass, weight, driver, engine);
    this.carrying = carrying;
  }
  toString() {
    super.toString();
    console.log(this.carrying + ' ' + 'm3');
  }
}

class SportCar extends Car{
  constructor (marka, carClass, weight, driver, engine, speed) {
    super(marka, carClass, weight, driver, engine);
    this.speed = speed;
  }
  toString() {
    super.toString();
    console.log(this.speed + ' ' + 'км/ч');
  }
}

const scania = new Lorry('Mercedes-Benz', 'B180', 1400, driver1, engine1, 100);
const porshe911 = new SportCar('Mercedes-Benz', 'B180', 1400, driver2, engine2, 330);

console.log(scania, porshe911);
scania.toString();
porshe911.toString();