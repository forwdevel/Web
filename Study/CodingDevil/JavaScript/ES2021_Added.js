// ES2021에서 새로 추가된 기능들



// String.replaceAll(바꾸고싶은 것, 바꿀 것)
// 모든 문자 교체

const str1 = "Hello World";
console.log(str1.replaceAll("l", "~"));



// Promise.any

const resPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("success");
    }, 2000);
})

const rejPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej(fail);
    }, 2000);
})

// 가장 먼저 완료된 결과값으로 이행/거부
Promise.race([resPromise, rejPromise])
    .then(() => console.log("성공"))
    .catch(e => console.log(e));

// 가장 먼저 이행된 객체 반환
// 둘다 거부될때만, catch문 동작
Promise.any([resPromise, rejPromise])
    .then(() => console.log("성공"))
    .catch(e => console.log(e));




// Logical assignment Operators

function add(num1, num2) {
    console.log(num1 + num2);
}

add(); // NaN

function add1(num1, num2) {
    num1 = num1 || 0;
    num2 = num2 || 0;
    console.log(num1 + num2);
}

// ||: 앞의 값이 false이면 뒤의 값

// ??: null 병합 연산자 (Nullish coalescing operator)
// => 앞의 값이 null이거나 undefined이면 뒤의 값




// 숫자 구분자 (Numberic separators)

let billion = 1_000_000_000 // 10억

console.log(billion); // 1000000000




// WeakRef
// 가능한 한 사용하지 않는 것이 좋음
// GC의 대상이 됨