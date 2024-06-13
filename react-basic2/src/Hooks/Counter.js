import React, { useReducer, useState } from 'react';

// reducer 함수...... 업데이트 정보를 통해서 새로운 상태를 만드는 로직
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    } 
}

function Counter() {
    // const [number, setNumber] = useState(0);
    // reducer 적용
    const [number, dispatch] = useReducer(reducer, 100) 


    const onIncrease = () => {
        // setNumber(prevNumber => prevNumber + 1);
        dispatch({type: 'INCREMENT'});
    };

    const onDecrease = () => {
        // setNumber(prevNumber => prevNumber -1);
        dispatch({type: 'DECREMENT'});
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>1 증가</button>
            <button onClick={onDecrease}>1 감소</button>
        </div>
    );
}

export default Counter;