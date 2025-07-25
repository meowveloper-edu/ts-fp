interface Loggable_Interface {
    get_log_message() : string;
}

function create_logger<T extends Loggable_Interface>(item : T) : (prefix : string) => void {
    return function (prefix : string) {
        console.log(`[${prefix}]: ${item.get_log_message()}`)
    }
}

class Product implements Loggable_Interface {
    constructor(public name : string, public price : number) {}
    get_log_message(): string {
        return `product: ${this.name} - ${this.price}`;
    }
}

const laptop = new Product('lenovo', 45000);
const log_laptop = create_logger(laptop);
log_laptop('INFO');