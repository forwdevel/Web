// .hasOwnProperty('property')
// 해당 객체가 프로퍼티를 가지고 있는지 확인하는 메소드

// 객체의 프로퍼티를 찾고,
// 그 프로퍼티가 없으면,
// 프로토(상속받은 프로퍼티)에서 찾음

// Prototype Chain:
// 상속을 계속 이어 받는 것

// for(p in objectName) {console.log(p);}
// 객체를 순회하면서, 프로토 타입까지 모든 프로퍼티 출력

// Object.keys()나 Object.values()에서는,
// 상속받은 프토퍼티는 안 나옴

/** 상속받은 프로퍼티인지 아닌지 확인하는 법
 * 
 * for(p in objectName) {
 *      if(objectMane.hasproperty(p)) {
 *          console.log('O', p);
 *      } else {
 *          console.log('X', p);   
 *      }
 * }
 * 
 */




// 프로토 타입의 동작 확인

// 객체의 중복되는 부분을 그대로 냅둔 코드
// const bmw = {
//     color: "red",
//     wheels: 4,
//     navigation: 1,
//     drive() {
//         console.log("drive..");
//     },
// };

// const benz = {
//     color: "black",
//     wheels: 4,
//     drive() {
//         console.log("drive..");
//     },
// };

// const audi = {
//     color: "blue",
//     wheels: 4,
//     drive() {
//         console.log("drive..");
//     },
// };

// 상속으로 중복을 없앤 코드
const car = { // 중복 코드 모음
    wheels: 4,
    drive() {
        console.log("drive..");
    },
}

const bmw = {
    color: "red",
    navigation: 1,
    // 중복 코드 제거
};

const benz = {
    color: "black",
    // 중복 코드 제거
};

const audi = {
    color: "blue",
    // 중복 코드 제거
};

// 상속 설정
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;


// 생성자를 이용한 단순화
// (여러 객체를 상속해야할 때 유용)

const Bmw = function(color) {
    this.color = color;
};

// // 간단하지 않은 코드
// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function() {
//     console.log("drive..");
// };
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function() {
//     console.log("stop!");
// }

// 간단화 한 코드
// 생성자 추가 안해주면,
// ===로 비교 불가능
Bmw.prototype = {
    constructor: Bmw, // 생성자 추가
    wheels: 4,
    drive() {
        console.log("drive..");
    },
    navigation: 1,
    stop() {
        console.log("stop!");
    },
};

// 몇개의 객체를 생성하던,
// 생성자를 사용하여 선언된 객체는,
// 위의 프로퍼티를 상속받음
const x5 = new Bmw("red");
const z4 = new Bmw("blue");

//instanceof로 생성자 확인 가능
//ex) z4 instanceof Bmw
// => true

// === 로도 가능
//ex) z4.constructor === Bmw
// => true