const values = {
    a: 10,
    b: 100
}

const proto = {
    b: 1000,
    c: 20,
    d: 200
}

Object.setPrototypeOf(values, proto);

console.log(values.a);  // 10   (found on values)
console.log(values.b);  // 100  (found on values, not on proto)
console.log(values.c);  // 20   (found on proto, not on values)
console.log(values.d);  // 200  (found on proto, not on values)



