import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: gray; /* 공간을 어느정도 차지하는지 확인하기 위한 용도의 배경색상 */
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="컴포넌트 스타일링하기" done={true} />
            <TodoItem text="Contect 구현하기" done={true} />
            <TodoItem text="각 기능 구현하기" done={true} />
            <TodoItem text="복습하기" done={true} />
        </TodoListBlock>);
};

export default TodoList;