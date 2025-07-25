function with_loggable<T extends Object>(obj : T) {
    return {
        ...obj,
        log(message : string) {
            console.log(`[LOG] ${message}`);
        }
    }
}

interface Car_Interface {
    model : string;
    drive() : void;
}

const my_car : Car_Interface = { model : 'Tesla', drive() { console.log("Vroom!!"); }};

type Loggable_Car_Type = Car_Interface & { log(message : string) : void }

const loggable_car : Loggable_Car_Type = with_loggable(my_car);

loggable_car.drive();
loggable_car.log("car started");