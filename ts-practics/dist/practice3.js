"use strict";
// Generics
// 타입스크립트에서 함수, 클래스, interface, type alias 를 사용할 때
// 여러 종류의 타입에 대해서 호환을 맞춰야 하는 상황에서 사용하는 문법
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 함수에서 Generics 사용하기
// 객체와 객체를 합쳐주는 함수..
// any 는 객체의 타입이 무엇이든 가능
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
// tsc (타입스크립트) 로 js 생성후 node dist/practice3.js 실행하면 출력
var merged = merge({ name: '홍길동' }, { age: 100 });
console.log(merged);
// 결과가 잘 나오니 문제가 없는것 같지만 타입스크립트를 사용하는 이유는 검증인데 any 를 사용하면 의미가 없어진다.
// 이런 경우 Generics 를 사용
function merge2(a, b) {
    return __assign(__assign({}, a), b);
}
var merged2 = merge2({ name: '홍길동2' }, { age: 1000 });
console.log(merged2);
function wrap(param) {
    return {
        param: param
    };
}
var wraped = wrap(10);
var wraped2 = wrap('hello');
var items = {
    list: ['a', 'b', 'c', 'd']
};
console.log(items);
var typeItems = {
    list2: [10, 20, 30, 40, 50]
};
console.log(typeItems.list2);
// 클래스에서 Generics사용
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    //배열의 길이 반환
    Queue.prototype.getLength = function () {
        return this.list.length;
    };
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
