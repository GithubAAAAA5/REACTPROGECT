import React from "react";
import { useState } from "react";

function Counter() {
    // useState를 사용해서 +1 이면 값을 1 씩 증가
    // -1 이면 1씩 감소 처리하기
    const [number, setNumber] = useState(0); // 비구조화 할당.
    // 버튼 동작 함수
    const onIncrease = () => {
        setNumber(number+1);
        // console.log('+1');
    }
     
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1); // 함수 등록 방식
        // setNumber{number-1};
        // console.log('-1');
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;