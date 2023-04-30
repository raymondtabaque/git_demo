const printFunction = name => {
    if (name) {
        return `Hello ${name}`;
    } else {
        return `Hello Stranger!`;
    }
}

console.log(printFunction());