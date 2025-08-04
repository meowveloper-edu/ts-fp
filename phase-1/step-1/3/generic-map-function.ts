function map_array<T, U>(arr : T[], transform : (item : T) => U) : U[] {
    const result : U[] = [];

    for (const item of arr) {
        result.push(transform(item));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const squared_numbers = map_array(numbers, (item : number) => item * item);
console.log(squared_numbers);

const mixed = map_array(numbers, (item) => `number: ${item}`);
console.log(mixed);
