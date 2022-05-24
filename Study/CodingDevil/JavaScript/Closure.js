// Closure (클로저)
// 함수와 렉시컬 환경의 조합
// 함수가 생성될 당시의 외부 변수를 기억
// 생성 이후에도 계속 접근 가능

// Lexical Environment(어휘적 환경)

// Example 1
// [0]번
/* [0]
 one: 초기화X (사용 불가)
 addOne: function (사용 가능)
*/
let one; // [1]번
/* [1]
    one: undefined (사용 가능)
    addOne: function (사용 가능)
*/
one = 1; // [2]번
/* [2]
    one: 1
    addOne: function
*/

function addOne(num) {
    console.log(one + num);
}

addOne(5); // [3]번
/* [5]
    (내부 환경): 외부(에서 없으면 전역) 환경에 대한 참조를 가짐
    num: 5

    (전역 환경)
    one: 1
    addOne: function
*/


// Example 2
function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

const add3 = makeAdder(3);
console.log(add3(2));

/*  전역 Lexical 환경

    makeAdder: function
    add3: 초기화X => function(make Adder 실행 후)
*/
/*  makeAdder Lexical 환경 (전역 참조)
    // 2번으로 실행

    x: 3
*/
/*  익명함수 Lexical 환경 (makeAdder 참조)
    // 1번으로 실행
    // (y는 있는데 x는 없어서 makeAdder로 감)

    y: 2
 */


// Example 3
function makeCounter() { // 외부 함수
    let num = 0; // 외부 함수의 변수 (은닉화)

    // num을 함수가 아니면 접근할 수 없고,
    // 함부로 값을 변경할 수 없다.
    // => 은닉화

    return function() { // 내부 함수
        return num++;
    };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2