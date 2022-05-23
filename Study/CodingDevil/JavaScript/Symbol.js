//property key: 문자형
/*
const obj = {
    1: '1입니다.',
    false : '거짓'
}

Object.keys(obj);
// ["1", "false"]

obj['1']
// "1입니다."
obj['false']
// "거짓"
*/


// Symbol: 유일성 보장
// new를 붙이지 않음
// 유일한 식별자
// 유일한 프로퍼티를 생성하고 싶을 때 사용

/*
const a = Symbol();
const b = Symbol();

console.log(a)
// Symbol()

console.log(b)
// Symbol()

a === b;
// false

a == b;
// false
*/

/*
const id = Symbol('id');
const id2 = Symbol('id');

console.log(id)
// Symbol(id)

console.log(id2)
// Symbol(id)

id === id2;
// false

id == id2;
// false
*/

//Property key: 심볼형
/*
const id = Symbol('id');
const user = {
    name: 'Mike',
    age: 30,
    [id] : 'myid'
}

console.log(user)
// {name: "Mike", age: 30, Symbol(id): "myid"}

Object.keys(user);
// ["name", "age"]
Object.values(user);
// ["Mike", 30]
Object.entries(user);
// [Array(2), Array(2)]
*/

/*
const user = {
    name: 'Mike',
    age: 30
}

const id = Symbol(id);
user[id] = 'myid'; //객체에 id 추가
*/

//Symbol.for(): 전역 심볼
/*
    하나의 심볼만 보장받을 수 있음
    없으면 만들고, 있으면 가져오기 때문
    Symbol 함수는 매번 다른 Symbol값을 생성하지만,
    Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol 공유
*/

//Example
/*
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

id1 === id2; //true

const id3 = Symbol('id');
const id4 = Symbol('id');

id3 === id4; //false
*/

// Symbol.keyFor(id1)  => // "id"
// 전역 심볼에만 사용 가능

// description
/*
    const id = Symbol('id 입니다.');
    id.description; // "id 입니다."
*/

//숨겨진 Symbol key 보는 법
/*
const id = Symbol('id');

const user = {
    name: 'Mike',
    age: 30,
    [id]: 'myid'
}

Object.getOwnPropertySymbols(user);
// [Symnol(id)]

Reflect.ownKeys(user);
// ["name", "age", Symbol(id)]
*/

//Example 2

// 다른 개발자가 만들어 놓은 객체
const user = {
    name: "Mike",
    age: 30,
};

// 내가 작업 => 사용자가 내가 만든 코드가 보일수도 있어서 이럴때 Symbol사용
//user.showName = function () { }; => His showName is function () {} => 그대로 출력

//남의 코드를 덮어쓸 일이 없음
const showName = Symbol('show name');
user[showName] = function () {
    console.log(this.name);
}

user[showName]();

// 사용자가 접속하면 보는 메세지
for (let key in user) {
    console.log(`His ${key} is ${user[key]}.`);
}