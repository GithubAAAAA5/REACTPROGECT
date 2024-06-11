// async/await : ES8에 해당하는 문법으로 Promise 를 더욱 쉽게 사용할 수 있게 한다.

// 기본 사용법
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    console.log('안녕하세요!');
    await sleep(1000); // 1초
    console.log('반갑습니다.');
}

async function makeError() {
    await sleep(1000);
    const error = new Error('강제 에러');       //Error 객체 생성
    throw error;        // 강제 예외 처리
}

async function process1() {
    // try {
    //     await makeError();
    // }catch(e) {
    //     console.log(e);
    // }
    await makeError()
    .then(() => console.log('에러없음'))        // 성공시
    .catch(e => console.log(e));            // 실패시
}

// process().then(() => {
//     console.log('작업이 끝났습니다.');
// })
// process1();

// process().then(() => {
//     console.log('작업이 끝났습니다.');
// })

// async 는 함수의 앞부분에 사용하는 키워드
// await 는 Promise 앞부분에 사용하는 키워드. 
// 프로미스가 끝날때 까지 기다렸다가 다음 작업을 수행함.


// 다수의 비동기 함수 처리...
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(888);
    return '멍멍이';
}

const getRabbit = async () => {
    await sleep(333);
    return '토끼';
}

const getTurtle = async () => {
    await sleep(3333);
    return '거북이';
}

async function process2() {
    const start = Date.now();
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
    const end = Date.now();
    console.log(end - start);
}

async function proccess3() {
    const start = Date.now();
    // Promise.all 을 이용한 동시 처리
    // 특징은 하나라도 실패하면 전체가 실패한것으로 간주함.
    // const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
    const end = Date.now();
    console.log(end - start);
}
// proccess3();
// Promise.race : 여러개의 프로미스를 등록하고 실행시
//  가장 빨리 끝난 것 한가지만 결과값으로 가져옴.
// 특징은 가장 먼저 성공하기 전에 먼저 끝난 Promise 가 실패하면 실패로 간주한다.

async function process4() {
    const first = await Promise.race([
        getDog(),
        getRabbit(),
        getTurtle()
    ])
    console.log(first)
}
process4();
