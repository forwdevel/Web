// Class
// = ES6에 추가된 스팩

// 클래스의 메소드는,
// for in문에서 제외됨




// 기존에 사용하던 객제 생성 방법

const User = function(name, age) {
    this.name = name;
    this.age = age;
    this.showName = function() {
        console.log(this.name);
    };
};

const mike = new User("Mike", 30);


// 클래스를 사용한 객체 생성 방법

class User2 {
    constructor(name, age) {
            this.name = name;
            this.age = age;
        } // 생성자 메소드
    showName() {
            console.log(this.name);
        } //User2의 프로토 타입에 저장됨
}

const tom = new User2("Tom", 19);



// 클래스의 상속

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive...");
    }
    stop() {
        console.log("stop!");
    }
}

class Bmw extends Car {
    constructor(color) {
            super(color); // 부모 클래스의 생성자 확장
            this.navigation = 1;
        } // 생성자 오버라이딩
    park() {
        console.log("PARK");
    }
    stop() {
            super.stop(); // 부모 클래스의 메소드 확장
            console.log("OFF");
        } // 메소드 오버라이딩 (덮어씀)
} // Car를 상속한 클래스

const z4 = new Bmw("blue");