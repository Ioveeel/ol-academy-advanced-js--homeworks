
    function createCar(make, model, year){
        let car = Object.create(cars)
        car.make = make 
        car.model = model
        car.year = year
        car.owners = []
        return car
    }
const cars = {
    getCarInfo() {
        return `${this.make} ${this.model} released in ${this.year}`
    },
    addOwner(owner){
        return  this.owners.push(owner)
    },
    removeOwner(owner){
        return this.owners.splice(owner)
    },
    getOwnersCount(){
        return this.owners.map(owner => owner)
    },
    getOwnerNames() {
        return this.owners.map(owner => ` ${owner.fullName()}`);
      }, 
      getFullInfo(){ 
        return `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount()} person owns this car. These are -${this.getOwnerNames()}`
    }
}




let duti_picoti = createCar("BMW", "525", "1999");
console.log(duti_picoti.getCarInfo());
console.log(duti_picoti.addOwner(['iviko','sadasd']));
console.log(duti_picoti.owners);
console.log(duti_picoti.getOwnersCount());



function createPerson(name, surname, age, gender, cars){
    const person = Object.create(persons)
    person.name = name
    person.surname = surname
    person.age = age
    person.gender = gender
    person.cars = cars
    return person
}

const persons = {
    fullName(){
        return `${this.name} ${this.surname}`
    },
    countCars(){
        return this.cars.length
    },
    buysCar(car){
        this.cars.push(car)
        car.addOwner(this)
    },
    sellsCar(car){
        this.cars.splice(0,1);
        car.removeOwner(this);
    }
}

let daniel916 = createPerson("Daniel", "Barbakadze", 21, "M", []);
console.log(daniel916.fullName());
console.log(daniel916.countCars());