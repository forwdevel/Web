//Array

//push():       뒤에 삽입
//pop():        뒤에 삭제
//unshift():    앞에 삽입
//shift():      앞에 삭제

// arr.splice(n,m,x): 특정 요소 지움
// n: 시작, m: 개수
/*
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);

console.log(arr); // [1, 4, 5]
*/

// arr.splice(n,m,x): 특정 요소 지우고 추가
// n: 시작, m: 개수, x: 추가
// x에 개수제한 없음
/*
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, 100, 200);
console.log(arr); //[1, 100, 200, 5]
*/

// arr.splice(n,m,x)를 이용해 원하는 위치에 추가하기
/*
let arr = ["나는", "철수", "입니다"];

arr.splice(1, 0, "대한민국", "소방관");
// ["나는", "대한민국","소방관","철수입니다"]
*/

//arr.splice(): 삭제된 요소 반환
/*
let arr = [1, 2, 3, 4, 5];
let result = arr.splice(1, 2);

console.log(arr);
console.log(result);
*/

//arr.slice(n, m): n부터 m까지 반환
/*
    let arr = [1, 2, 3, 4, 5];
    let result = arr.slice(1, 4); //[2, 3, 4]

    // 괄호안에 아무숫자도 안넣으면 전부 반환
    let arr2 = arr.slice();
    console.log(arr2); // [1, 2, 3, 4, 5]
*/

// arr.concat(arr2, arr3 ..): 합쳐서 새 배열 반환
/*
    let arr = [1, 2];

    arr.concat([3, 4]); // [1, 2, 3, 4]
    arr.concat([3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]
    arr.concat([3, 4], 5, 6); // [1, 2, 3, 4, 5, 6]
*/

// arr.forEach(fn): 배열 반복
/*
    let user = ['Mike', 'Tom', 'Jane'];

    // item: 'Mike', 'Tom', 'Jane'
    // index: 0, 1, 2
    // arr: 배열 그 자체
    // 보통은 item과 index만 사용
    user.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`)
    });
*/

// arr.indexOf() / arr.lastIndexOf(): 괄호 안의 내용을 탐색
/*
    let arr = [1, 2, 3, 4, 5, 1, 2, 3];

    arr.indexOf(3); // 2
    arr.indexOf(3,3); // 7 (2번째 숫자는 시작위치)
    
    // 뒤에서 부터 탐색
    arr.lastIndexOf(3); // 7
*/

//arr.includes(): 포함 여부 확인 (불린)
/*
let arr = [1, 2, 3];

arr.includes(2); // true
arr.includes(8); // false
*/

// arr.find(fn) / arr.findIndex(fn): 첫번쨰 true값만 반환하고 끝
// 만약 없으면 undefined를 반환 / -1을 반환
/*
let arr = [1, 2, 3, 4, 5];

//true가 될때 반환하고 멈춤
const result = arr.find((item) => {
    return item % 2 === 0; // 짝수만 찾아냄
})

console.log(result); // 2
*/
/*
let userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10 },
];

const result = userList.find((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});

console.log(result);
*/

// arr.filter(fn): 만족하는 모든 요소를 배열로 반환
/*
let arr = [1, 2, 3, 4, 5];

//true가 될때 반환하고 멈춤
const result = arr.filter((item) => {
    return item % 2 === 0; // 짝수만 찾아냄
})

console.log(result); // 2
*/

// arr.reverse(): 역순으로 재정렬
/*
let arr = [1, 2, 3, 4, 5];
arr.reverse(); // [5, 4, 3, 2, 1]
*/

//arr.map(fn): 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
/*
let userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10 },
];

const newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    }); //user값과 번호와 성인여부의 불린값을 추가하고, 반환
});

console.log(newUserList);
console.log(userList); // Not changed
*/

// join, split
/*
let arr = ["안녕", "나는", "철수야"];

let result = arr.join();
// 안녕, 나는, 철수야
let result2 = arr.join(" ");
// 안녕 나는 철수야

const user = "Mike,Jane,Tom,Tony";
// 괄호 안의 기준으로 나눠서 배열을 만듦
let result3 = user.split(","); // ["Mike","Jane","Tom","Tony"]
//괄호안에 ""만 넣으면 한글자씩 저장

console.log(result);
console.log(result2);

console.log(result3);
*/

// Array.isArray()
/*
let user = {
    name: "Mike",
    age: 30,
}

let userList = ["Mike", "Tom", "Jane"];

console.log(typeof user) //object
console.log(typeof userList) //object

console.log(Array.isArray(user)) //false
console.log(Array.isArray(userList)) //true
*/

// arr.sort()
// 배열 재정렬 (배열 자체가 변경되니 주의)
// 문자열 기준이라 앞자리가 다르면 인식하지 못함 ex(27 < 5)
/*
let arr = [1, 5, 4, 2, 3];

arr.sort();

console.log(arr); // [1, 2, 3, 4, 5]
*/
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.sort();

console.log(arr); // ['a', 'b', 'c', 'd', 'e']
*/
/*
    let arr = [27, 8, 5, 13];

    function fn(a, b) {
        console.log(a, b);
        return a - b;
        // a 와 b를 비교해서 a 가 작으면 a를 앞으로 보내고,
        // 같으면 가만히, 크면 b가 앞으로
    }
    arr.sort(fn);
*/
/*
    arr.sort((a,b) => {
        return a - b;
    });
*/
/*
    console.log(arr); // [1, 2, 3, 4, 5]
*/

// 이 로직들이 어렵다면,
// Lodash에서 제공하는,
// _.sortBy(arr);로,
// 타입에 관계없이, 분류가능
// https://lodash.com/


// arr.reduce();
//배열의 모든 수 합치기
/*
let arr = [1, 2, 3, 4, 5];

// for, for of, forEach

let result = 0;

arr.forEach(num => {
    result += num;
});

console.log(result); // 15

//prev : 누적된 합계, cur: 현재 값, 0: 초기값(안써도됨)
const result2 = arr.reduce((prev, cur) => {
    return prev + cur;
}, 0)
*/
/*
let userList = [
    { name: "Mike", age: 30 },
    { name: "Tom", age: 10 },
    { name: "Jane", age: 27 },
    { name: "Sue", age: 26 },
    { name: "Harry", age: 42 },
    { name: "Steve", age: 60 },
];

let result = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev.push(cur.name);
        // 성인이면, 누적된 값에 현재값의 이름을 넣음
    }
    return prev;
}, []);

console.log(result);
*/