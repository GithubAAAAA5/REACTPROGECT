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
    function Circle(radius) {
        this.radius = radius;
    }
    // 너비를 가져오는 함수
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shape = [new Circle(5), new Rectangle(10, 20)];
shape.forEach(function (shape) { return console.log(shape.getArea()); });
