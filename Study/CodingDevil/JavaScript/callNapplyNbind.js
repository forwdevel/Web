// call, apply, bind :
// 함수 호출 방식과 관계 없이 this를 지정할 수 있음

// call
// 모든 함수에서 사용 가능
// 일반적인 함수와 마찬가지로 매개변수를 직접 받음

// apply
// 함수 매개변수를 처리하는 방법을 제외하면 call과 동일
// 매개변수를 배열로 받음
// 배열을 사용할 때 용이

// bind
// 함수의 this 값을 영구히 바꿀 수 있음



// call Examples

// Example 1
const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
}

function showThisName() {
    console.log(this.name);
}

showThisName();
// 아무것도 출력되지 않음
// (this를 window로 인식, 하지만 window는 빈 문자열)
showThisName.call(mike);
// call에 객체 인자를 넘기면 this를 이것으로 인식

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
};

//인자, birthYear, occupation
update.call(mike, 1999, 'singer');
console.log(mike);

//인자, birthYear, occupation
update.call(tom, 2002, 'teacher');
console.log(tom);



// apply Examples

// Example 1
const mike2 = {
    name: "Mike",
};

const tom2 = {
    name: "Tom",
}

//인자, [birthYear, occupation]
update.apply(mike, [1999, 'singer']);
console.log(mike);

//인자, [birthYear, occupation]
update.apply(tom, [2002, 'teacher']);
console.log(tom);


// Example 2
const nums = [3, 10, 1, 6, 4];

const minNum = Math.min.apply(null, nums);
// = Math.min.apply(null, [3, 10, 1, 6, 4])
// this가 필요없어서 인자자리 비워둠

const maxNum = Math.max.apply(null, nums);
// = Math.max.apply(null, [3, 10, 1, 6, 4])
// this가 필요없어서 인자자리 비워둠

console.log(minNum);
console.log(maxNum);



// bind Examples

// Example 1

// 함수생성
// (this값을 항상 mike로 받음)
const updateMike = update.bind(mike);

updateMike(1980, "police");
console.log(mike);


// Example 2
const user = {
    name: "Mike",
    showName2: function() {
        console.log(`Hello, ${this.name}`);
    },
};

user.showName2();

let fn = user.showName2;

fn(); //앞에 인수. 이 없어서 빈칸 나옴
fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();