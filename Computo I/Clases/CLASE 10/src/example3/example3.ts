function identify<T>(arg: T) {
    return arg;
}

console.log(identify<string>("Hola"));
console.log(identify<number>(100));