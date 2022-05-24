// Generator
// = 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// function* 의 형태
// iterable한 iterator.
// 값을 미리 만들어두지 않음 = 그때 그때 계산해서 출력
// => (메모리상 이득 + 무한반복문을 만들어도 브라우저가 뻗지않음)
// 다른 작업을 하다가 다시 돌아와서 next() 해주면,
// 진행이 멈췄던 부분부터 이어서 실행 (ex) Redux Saga)

// iterable (반복 가능한)
// => Symbol.iterator 메서드가 있다.
// => Symbol.iterator는 iterator를 반환해야 한다.

// iterator
// => next 메서드를 가진다.
// => next 메서드는 value와 done 속성을 가진 객체를 반환한다.
// => 작업이 끝나면, done은 true가 된다.

// 배열도 문자열도 iterable한 iterator다.

// yield*
// 반복가능한 모든 태그가 올 수 있음


// methods

// .next()
// 가장 가까운 yield문을 만날 때까지 작동
// (초기화 되지 않고 차례대로 이동)
// 끝나면, {value: "finish", done: true}
// 끝나고도 계속 수행되면, {value: "undefined", done: true}

// .return(val)
// 함수 종료 {value: val, done: true}
// 후에 next()를 다시 사용해도, {value: "undefined", done: true}

// .throw(new Error("err"))
// catch문 실행, {value: "undefined", done: true}
// 후에 next()를 다시 사용해도, {value: "undefined", done: true}



// Example (Basic)
function* fn() {
    try {
        console.log(1);
        yield 1; // yeild 뒤의 값을 생략하면, undefined
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3;
        return "finish";
    } catch (e) {
        console.log(e);
    }
}

const a = fn();

a.next();



// Example (input)
function fn2() {
    const num1 = yield "첫번째 숫자를 입력해주세요.";
    console.log(num1); // 이곳에서 입력된 값이 num1에 저장됨
    // {value: "첫번째 숫자를 입력해주세요", done: false}

    const num2 = yield "두번째 숫자를 입력해주세요.";
    console.log(num2); // 이곳에서 입력된 값이 num2에 저장됨
    // {value: "두번째 숫자를 입력해주세요", done: false}

    return num1 + num2;
    // {value: num1 + num2, done: true}
}

const b = fn2();



// Example (yeild*)
function* gen1() {
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function gen2() {
    yield "Hello,";
    yield* gen1();
    yield "!";
}

console.log(...gen2());
// Hello, W o r l d !