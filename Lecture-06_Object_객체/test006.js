var emptyObj = {};
console.log(typeof(emptyObj));

var man = {
    name : "홍길동",
    age : 20,
    height : 180
};
console.log(man);
console.log(man.name);
man.name="이몽룡";
console.log(man["name"]);