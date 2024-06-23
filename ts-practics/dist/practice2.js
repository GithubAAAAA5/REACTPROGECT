"use strict";
/// 함수 타입 정의하기
function sum(x, y) {
    return x + y;
}
console.log(sum(10, 20));
// 배열
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([10, 20, 30, 40, 50, 60]);
console.log(total);
function nonReturnFunction() {
    console.log('반환값이 없는 함수...');
}
var Circle = /** @class */ (function () {
    // Property 'getArea' is missing in type 'Circle'  '원' 유형에 'getArea' 속성이 없습니다
    //    but required in type 'Shape'.ts(2420)     그러나 'Shape.ts(2420)' 입력에 필요합니다
    // implements 키워드를 통해서 interface 를 구현한다는 것을 명시 한다. 
    // radius: number; // 멤버 변수 설정하기 선언하기
    // public 사용후 파라미터 쪽 설정을 생략
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Reactangle = /** @class */ (function () {
    // width: number;
    // height: number;
    function Reactangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Reactangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Reactangle;
}());
var shape = [new Circle(5), new Reactangle(10, 20)];
shape.forEach(function (shape) { return console.log(shape.getArea()); });
var circle = new Circle(8);
var reactangle = new Reactangle(100, 200);
console.log(circle.radius); // radius 를 public 으로 접근 제한 설정
var person = {
    name: '홍길동',
    age: 100
};
var expert = {
    name: '빌게이츠',
    skills: ['C', 'C++', 'React']
};
var people = [person, expert];
var expert2 = {
    name: '저커버그',
    skills: ['Face', 'Book', 'Meta']
};
var people2 = [person, expert2];
var color2 = 'red';
var colors = ['red', 'yellow'];
