//membuat variabel
let myNumber = 16;
let myString = "Hello";
let myBoolean = true;
const phi = 3.14;
//menampilkan informasi ke console
console.log(myNumber);
console.log(myString);
console.log(myBoolean);
console.log(phi);
//menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : " + myNumber);
window.alert('Angka favorit saya adalah : ' + myNumber);
window.alert(`Angka favorit saya adalah : ${myNumber}`);

let x = 10
let y = 4
console.log(x, y)
console.log('x + y =', x + y) //Addition nilai x dengan y adalah 14 
console.log('x - y =', x - y) //Subtraction nilai x dengan y adalah 6
console.log('x * y =', x * y) //Multiplication nilai x dengan y adalah 40
console.log('x / y =', x / y) //Division nilai x dengan y adalah 2.5
console.log('x % y =', x % y) //Modulus nilai x dengan y adalah 2
console.log('x++ =', x++) //Increment nilai x dengan y adalah 10
console.log('++x =', ++x) //Increment nilai x dengan y adalah 12
console.log('x-- =', x--) //Decrement nilai x dengan y adalah 12
console.log('--x =', --x) //Decrement nilai x dengan y adalah 10

let a = 12
let b = 4
console.log(a, b)
console.log('a > b =', a > b) //nilai a Greater than atau lebih dari nilai b adalah true
console.log('a < b =', a < b) //nilai a Less than atau kurang dari nilai b adalah false
console.log('a >= b =', a >= b) //nilai a Greater than or equal to atau lebih dari sama dengan nilai b adalah true
console.log('a <= b =', a <= b) //nilai a Less than or equal to atau kurang dari sama dengan nilai b adalah true
console.log('a == b =', a == b) //nilai a Equal to atau sama dengan nilai b adalah false
console.log('a != b =', a != b) //nilai a Not Equal to atau tidak sama dengan nilai b adalah true
console.log('a === b =', a === b) //nilai a Equal value and equal type atau nilai yang sama dan jenis yang sama dengan nilai b adalah false
console.log('a !== b =', a !== b) //nilai a Not Equal value and not equal type to dengan nilai b adalah true

//menentukan pernytaan salah atau benar
console.log('true && true =', true && true) // true dan true adalah true 
console.log('true && false =', true && false) //true dan false adalah false
console.log('false && true =', false && true) //false dan true adalah false
console.log('false && false =', false && false) //false dan false adalah false
console.log('true || true =', true || true) //true atau true adalah true
console.log('true || false =', true || false) //true atau false adalah true
console.log('false || true =', false || true) //false atau true adalah true
console.log('false || false =', false || false) //false atau false adalah false
console.log('!true =', !true) //tidak true adalah false
console.log('!false =', !false) //tidak false adalah true

//fungsi sederhana
//luas persegi
function luas_persegi (s){
    return s*s
}

//luas segitga
function luas_segitiga (a, t){
    return 0.5 * a * t
}

//volume balok
function volume_balok (p*l*t){
    return p*l*t
}
console.log("luas persegi =" + luas_persegi(5))
console.log("luas segitiga =" + luas_segitiga(10,5))
console.log("volume balok =" + volume_balok(20,6,5))