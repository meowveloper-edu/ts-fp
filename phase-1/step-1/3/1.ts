interface has_length {
    length : number;
}

function logging_identity<T extends has_length>(arg : T) : T {
    console.log(arg.length);
    return arg;
}

logging_identity('string');
logging_identity([1, 2, 3]);
logging_identity({ length : 10, name : 'sayar g'});


function get_property<T, K extends keyof T>(obj : T, property : K) {
    return obj[property];
}

const my_obj = { a : 1, b : 'string', c : false};

const value_1 = get_property(my_obj, "a");
const value_2 = get_property(my_obj, "b");
const value_3 = get_property(my_obj, "c");

console.log('value 1', value_1, 'value 2', value_2, 'value 3', value_3);