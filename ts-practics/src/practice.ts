let count = 0; // 숫자
count += 1;
// count = '숫자 쓰다가 갑자기 문자열.....'        // 에러가 발생함 why? count 를 숫자로 판단했기 때문에.

const message: string = 'Hello World';
console.log(message);

const done : boolean = true;        // done->불리언type
// const doen2 = true;                 // done2->불리언
// done2 = 'false';                    // const 로 done2 를 정의해줬기 때문에, const는 재정의가 되지않아 false 를 줄수없다.

const numbers: number[] = [1, 2, 3, 4];
const messages: string[] = ['hello','world'];

numbers.push(5);
// messages.push(3);           // 문자열 배열에 숫자는 XX

// undefined 와 null 허용
let mightBeUndefined: string | undefined = undefined;       // string 또는 undefined
let nullableNumber: number | null = null;
// let count2: number = null;      //Type 'null' is not assignable to type 'number'.

// let color : 'red'|'yello'|'orange' = 'purple';      
//Type '"purple"' is not assignable to type '"red" | "yello" | "orange"'.
// 앞에서 red yello orange 로 정했으므로 pruple은 XX

var color : 'red' | 'yellow' | 'orange' = 'red';
color = 'yellow';
// color = 'white';
// console.log(message);


console.log(message);