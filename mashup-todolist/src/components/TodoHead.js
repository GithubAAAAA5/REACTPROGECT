import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
    /* padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px; */
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    
    .day {
        margin-top: 4px;
        font-size: 21px;
        color: #868e96;
    }

    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: 500;
    }
`;

function TodoHead() {
    const todos = useTodoState();
    console.log(todos);

    // 작업할 갯수
    const undoneTasks = todos.filter(todo => !todo.done);

    // 날짜!
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;