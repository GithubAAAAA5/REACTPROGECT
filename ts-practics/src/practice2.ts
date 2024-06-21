/// 함수 타입 정의하기
function sum (x:number,y:number) : number {
    return x + y ;
}

console.log(sum(10,20));

// 배열
function sumArray(numbers:number[]):number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([10, 20, 30, 40, 50, 60]);
console.log(total);

function nonReturnFunction():void {     // 반환값이 없는 타입의 함수. 타입 지정(void)
    console.log('반환값이 없는 함수...')
}

// Interface 사용해보기
// Interface 는 클래스 또는 객체를 위한 타입지정 할 때 사용 되는 문법이다.\

// Shape 라는 interface 선언하기
interface Shape {
    getArea() : number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 한다.
}

class Circle implements Shape {     //Class 'Circle' incorrectly implements interface 'Shape'. '원' 클래스가 인터페이스 '형상'을 잘못 구현합니다.
                                    // Property 'getArea' is missing in type 'Circle'  '원' 유형에 'getArea' 속성이 없습니다
                                    //    but required in type 'Shape'.ts(2420)     그러나 'Shape.ts(2420)' 입력에 필요합니다
    // implements 키워드를 통해서 interface 를 구현한다는 것을 명시 한다. 
    // radius: number; // 멤버 변수 설정하기 선언하기

    // public 사용후 파라미터 쪽 설정을 생략
    constructor(public radius: number) {
        this.radius = radius;
    }

    // 너비를 가져오는 함수
    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Reactangle implements Shape {
    // width: number;
    // height: number;

    constructor(private width: number, private height:number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
}

const shape: Shape[] = [new Circle(5), new Reactangle(10, 20)];
shape.forEach(shape => console.log(shape.getArea()));

const circle = new Circle(8);
const reactangle = new Reactangle(100, 200);

console.log(circle.radius);         // radius 를 public 으로 접근 제한 설정
// console.log(reactangle.width);      // with, height 는 private 으로 접근 제한 이라서 width 빨간줄

// 클래스가 아닌 일반 객체를 interface 를 사용하여 타입 지정하기
interface Person {
    name : string;
    age? : number;      // 물음표는 설정해도 되고 안해도 되는 값을 의미한다.
}

// interface Developer {
//     name : string,
//     age?: number;
//     skills: string[];
// }
// 상속 처리하기
interface Developer extends Person {
    skills: string[];
}

const person: Person = {
    name: '홍길동',
    age: 100
}

const expert: Developer = {
    name: '빌게이츠',
    skills: ['C','C++', 'React']
};

const people: Person[] = [person, expert];

// Type Alias
// type 은 특정 타입에 별칭을 붙이는 용도로, 이를 사용하여 객체를 위한 타입을
// 설정 할 수 있고, 배열 또는 그 어떤 타입이든 별칭을 지을 수 있다.

type Developer2 = Person & {    // & 를 사용해서 두개 이상의 타입을 합한다.
    skills: string[];
}

const expert2 : Developer2 = {
    name: '저커버그',
    skills: ['Face','Book','Meta']
}

const people2:Person[] = [person, expert2];

type Color = 'red'|'orange'|'yellow';
const color2 : Color = 'red';
const colors: Color[] = ['red','yellow'];