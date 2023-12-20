const toLine = (value) => {
    return value.replace(/(A-Z)g/,'-$1').toLocaleLowerCase();
}

let name = 'Abc'
console.log(toLine(name));