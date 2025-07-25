interface Circle_Interface {
    kind : "circle";
    radius : number;
}

interface Square_Interface {
    kind : "square";
    side_length : number;
}

interface Triangle_Interface {
    kind : "triangle";
    base : number;
    height : number;
}

type Shape_Type = Circle_Interface | Square_Interface | Triangle_Interface;

function calculate_area (shape : Shape_Type) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return shape.side_length ** 2;

        case "triangle":
            return 0.5 * shape.base * shape.height;

        default:
            return shape as never;
    }
}

const my_circle : Shape_Type = { kind : "circle", radius : 10 };
const my_triangle : Shape_Type = { kind : "triangle" , base : 4 , height : 6 };
const my_square : Shape_Type = { kind : "square", side_length : 5 };

console.log(`circle area: ${calculate_area(my_circle)}.`);
console.log(`triangle area: ${calculate_area(my_triangle)}.`);
console.log(`square area: ${calculate_area(my_square)}`);