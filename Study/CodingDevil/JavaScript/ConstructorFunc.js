//Contructor Function

// 객체 리터럴
/*
    let user = {
        name: 'Mike',
        age: 30,
    }
*/

// 생성자 함수
/*  //첫글자 대문자로
    functuin User(name, age){
        this.name = name;
        this.age = age;
    }

    let user1 = new User('Mike', 30);
    let user2 = new User('Jane', 22);
    let user3 = new User('Tom', 17);
*/

// 생성자 예제

function Item(title, price) {
    this.title = title;
    this.price = price;
    this.ShowPrice = function () {
        console.log("Price: " + price);
    }
}

const item1 = new Item("1", 1000);
const item2 = new Item("2", 2000);

console.log(item1, item2);

item1.ShowPrice();