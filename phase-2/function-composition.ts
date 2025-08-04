const compose = (f: Function, g: Function, x: number) => f(g(x));

const pipe = (...args: ((x: number) => number)[]) => args.reduce((acc, curr) => (x: number) => curr(acc(x)));

const test = pipe(
	x => x * x,
	x => x + 10
);

console.log(test(6));
