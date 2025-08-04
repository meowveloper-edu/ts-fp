interface User {
    id : number;
    name : string;
    email : string;
    is_active : boolean;
}

type User_Keys = keyof User;
const k : User_Keys = 'name';

type Product = {
    id : number;
    price : number;
    in_stock : boolean;
}

type Product_Keys = keyof Product;

interface String_Dictionary {
    [key : string] : string;
}

type String_Dictionary_Keys = keyof String_Dictionary;

const COLORS = {
    red : "asdf",
    green : "asdfasdf",
    blue : "asdfdidfk"
} as const;

type Color_Names = keyof typeof COLORS;

function test_function<K extends Color_Names>(name : K) {
    console.log(name);
}

interface Cookie_Map {
    isLearner : boolean;
    language : 'en' | 'mm';
}
function get_cookie<T extends keyof Cookie_Map>(name : T) : Cookie_Map[T] | undefined | null {
    console.log(name);
    return {} as Cookie_Map[T] | undefined | null;
}

const learner = get_cookie('isLearner');
const language = get_cookie('language');

function filter_by_property <T, K extends keyof T>(items : T[], key : K, value : T[K]) : T[] {  
    return items.filter(item => item[key] === value);
}

interface User_Interface {
    id: number;
    name: string;
    isActive: boolean;
}

const users: User_Interface[] = [
    { id: 1, name: "Alice", isActive: true },
    { id: 2, name: "Bob", isActive: false },
    { id: 3, name: "Charlie", isActive: true }
];

console.log(filter_by_property(users, 'name', "Alice"));