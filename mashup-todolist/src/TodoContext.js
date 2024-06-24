// useReducer 를 사용하여 상태를 관리하는 TodoProvider 컴포넌트
import React, { createContext, useContext, useReducer, useRef } from "react";

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: 'Context 만들어 사용하기',
        done: true
    },
    {
        id: 4,
        text: '기능구현하기...',
        done: true
    },
    {
        id: 5,
        text: '복습하기',
        done: false
    },
];



function todoReducer(state, action) {
    // 생성, 제거, 토글(완료여부)
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE' :
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type : ${action.type}`);
    }
}

// Context 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
// NextId 를 넘겨야 하는 이유 : Create 시 NextId가 필요하다.
const TodoNextIdContext = createContext();

export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(6); //기본값이 5개이기 떄문에 6부터
    return (
        <TodoStateContext.Provider value={state}>         {/* state를 Context로 전달 */}
            <TodoDispatchContext.Provider value={dispatch}>             {/* dispatch를 Context로 전달 */}
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

/* useContext 에 직접 사용하는 대신에 useContext 를 사용하는 Hook  만들어 내보내기 */
// 커스텀 훅 에러 처리 하기 .
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoContextProvider')
    }
    return useContext(TodoStateContext);
}

export function useTodoDispatch() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoContextProvider')
    }
    return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoContextProvider')
    }
    return useContext(TodoNextIdContext);
}