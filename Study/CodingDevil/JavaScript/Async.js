// async
// Promise로 인식
// => 함수뒤에 바로 then 사용가능

async function getName() {
    return "Mike";
    // 반환값이 promise면,
    // 그 값을 그대로 사용
}

console.log(getName());

getName().then((name) => {
    console.log(name);
});




// await
// async함수 내부에서만 사용 가능

async function showName() {
    const result = await getName('Mike');
    console.log(result);
}

console.log("시작");
showName();

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

async function order() {
    try {
        const result = await Promise.all([g1(), g2(), g3()])
        console.log(result);
    } catch (e) {
        console.log(e);
    }
    console.log("종료");
}
order();