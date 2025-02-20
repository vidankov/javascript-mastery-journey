const cat = {
    species: "Кошка",
    sound: "Мяу",
    makeSound: function () {
        console.log(this.sound);
    }
}

const dog = {
    species: "Собака",
    sound: "Гав",
    makeSound: function () {
        console.log(this.sound);
    }
}

const cow = {
    species: "Корова",
    sound: "Му",
    makeSound: function () {
        console.log(this.sound);
    }
}


cat.makeSound(); // Мяу
dog.makeSound(); // Гав
cow.makeSound(); // Му

const item = cat.makeSound;

console.log(item); // [Function: makeSound]

item(); //undefined

item.bind(cat)(); // Мяу
item.bind(dog)(); // Гав
item.bind(cow)(); // Му

const catItem = item.bind(cat);
catItem(); // Мяу


// попробуем привязать dog к методу, с которым уже связана cat:
catItem.bind(dog)(); // Мяу (не получилось)