// Rest Parameters

// 인수 전달
// 인수에 개수 제한이 없음
// 따라서 name은 하나가 아니어도 됨
/*
    function showName(name) {
        console.log(name);
    }

    showName('Mike'); // 'Mike'
    showName('Mike', 'Tom'); // 'Mike' / undefined
    showName(); // Undefined
*/

// arguments

// 함수로 넘어온 모든 인수에 접근
// 함수내에서 이용 가능한 지역 변수
// length / index
// Array 형태의 객체
// 배열의 내장 메서드 없음 (forEach, map 사용 불가)

/** Example (common)
 * 
 * function showName(name){
 *      console.log(argument.length); // 2
 *      console.log(argument[0]); // 'Mike'
 *      console.log(argument[1]); // 'Tom'
 * }
 * 
 * showName('Mike', 'Tom');
 */

// Rest parameters
// 사용 권장

/** Example (common)
 * 
 * function showName(...names) {
 *      console.log(names);
 * }
 * 
 * showName(); // []
 * showName('Mike'); // ['Mike']
 * showName('Mike', 'Tom'); // ['Mike', 'Tom']
 */

/** Example (with forEach)
 * 
 * function add(...numbers) {
 *       let result = 0;
 *       numbers.forEach((num) => { result += num; });
 *       console.log(result);
 * }
 *
 * add(1, 2, 3);
 * add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
 */

/** Example (with reduce)
 * 
 * function add(...numbers) {
 *      let result = numbers.reduce((prev, cur) => prev + cur);
 *      console.log(result);
 * }
 * 
 * add(1, 2, 3);
 * add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
 */

/** Example (with constructor)
 * 
 * // 나머지 매게인자는 항상 마지막에 있어야함, 안그럼 인식을 못함
 * // ex)function User (name, age, ...skill, num) => error
 * 
 * function User (name, age, ...skill) {
 *      this.name = name;
 *      this.age = age;
 *      this.skill = skill;
 * }
 * 
 * const user1 = new User('Mike', 30, 'html', 'css');
 * const user2 = new User('Tom', 20, 'JS', 'React');
 * const user2 = new User('Jane', 10, 'English');
 * 
 * console.log(user1);
 * console.log(user2);
 * console.log(user3);
 */