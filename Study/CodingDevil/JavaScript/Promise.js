// Promise

// callback 함수
// = 어떤 일이 끝난 후 실행되는 함수

// catch문
// => reject시에만 실행

// finally문
// => resolve건 reject건 항상 실행

// Promise.all
// 배열 내부가 모두 성공일 때, 작동 (시간절약)
// 하나라도 틀렸을 때, 정보를 보여주고 싶지 않다면,
// 유용하게 사용가능

// Promise.race
// 하나가 먼저 끝나면, 그것만 출력하고 종료
// 고용량의 이미지를 보여줄때, 사용



// 사용방법
// resolve: 성공했을 때, 실행되는 함수
// reject: 실패했을 때, 실행되는 함수
const prtest = new Promise((resolve, reject) => {
    // code
});


// new Promise 생성자가 갖는 프로퍼티
// state: pending(대기)
// result: undefined

// 성공한 경우
// resolve(value) 호출
//      state: fulfilled(이행됨)
//      result: value

// 실패한 경우
// reject(error) 호출
//      state: rejected(거부됨)
//      result: error



// Example (Success)

const successTest = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 3000);
});

//        0초             =>   3초 후
//state:      pending     => fulfilled
//result:   undefined     => 'OK'



// Example (fail)

const failTest = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('error..'))
    }, 3000);
});

//        0초             =>   3초 후
//state:      pending     => rejected
//result:   undefined     => error



// Example (활용방법)

// 주문 시,
// 상점
const store = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 3000)
});

// 주문 결과 시,
// 소비자
store.then(
    function(result) {
        console.log(result + ' 가지러 가자.');
    },
    function(err) {
        console.log('다시 주문해주세요..');
    }
)

// 괄호 안을 비워뒀을 경우,
store.then(
    function(result) {}, // => 이행 되었을 때 실행 ('OK' 값이 result로 들어옴)
    function(err) {} // 거부 되었을 때 실행 (에러 값이 err로 들어옴)
);

// 위의 then을 catch로 바꿧을 경우(동일 코드),
// 에러를 잡기 쉬워 권장되는 방법
store.then(
    function(result) {}
).catch(
    function(err) {}
)

// 위의 코드에,
// finally문을 추가한 코드
store.then(
    function(result) {}
).catch(
    function(err) {}
).finally(() => {
    console.log('끝') // 성공 여부에 관계없이, 출력
});


// 실전 예제


// Promise없이 구현
const f1 = (callback) => {
    setTimeout(function() {
        console.log('1번 주문 완료');
        callback();
    }, 1000);
};

const f2 = (callback) => {
    setTimeout(function() {
        console.log('2번 주문 완료');
        callback();
    }, 3000);
};

const f3 = (callback) => {
    setTimeout(function() {
        console.log('3번 주문 완료');
        callback();
    }, 2000);
};

console.log('시작')
f1(function() {
    f2(function() {
        f3(function() {
            console.log("끝");
        })
    })
})

//Promise 사용
const g1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const g2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
            // 만약 res를 reject로 바꾸면 출력한 후,
            // g3은 실행되지 않음
        }, 3000);
    });
};

const g3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

console.log('시작');

// Promise chaining
g1().then(res => g2(res)) // g1에서 반환된 res를 g2에 넣음
    .then(res => g3(res)) // g2에서 반환된 res를 g3에 넣음
    .then((res) => console.log(res)) //g3에서 반환된 res를 출력
    .catch(console.log) // 에러나면 표기
    .finally(() => {
        console.log('끝') // 성공 여부에 관계없이, 출력
    });



// Promise.all
console.time('x') // 시간 측정 가능
Promise.all([g1(), g2(), g3()])
    .then(res => {
        console.log(res);
        console.timeEnd("x"); // 측정한 시간 출력
    });

// Promise.race
console.time('x') // 시간 측정 가능
Promise.race([g1(), g2(), g3()])
    .then(res => {
        console.log(res);
        console.timeEnd("x"); // 측정한 시간 출력
    });