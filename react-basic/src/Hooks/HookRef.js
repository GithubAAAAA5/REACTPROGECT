import React, { useRef } from "react";

function HookRef() {
    // useState
    const [form, setForm] = React.useState({data:'' , result:''});

    // useRef
    const inputTag = useRef(null);

    // input 핸들링
    const handleChange = e => {
        setForm({data:e.target.value});     // input  값 변경시 마다 data  변수의 변화
    }

    // 버튼 핸들링 - 클릭시 state는 변경하고, input 태그에 포커스 처리하기
    const handleClick = e => {
        console.log("클릭 처리 전 : ");
        console.log(inputTag);
        console.log(inputTag.current);
        setForm({data:'', result: form.data})
        // useRef 의 사용 - current 로 ref 의 현재 태그에 접근 가능
        inputTag.current.focus();
        // inputTag.current.value = 'test';
        inputTag.current.type= 'email';
    }

    return (
        <div>
            할 일 : <input 
            type="text" 
            className="test"
            value={form.data}
            onChange={handleChange}
            ref={inputTag} />
            <button type="button" onClick={handleClick}>등록하기</button>    
            <br />
            결과 : {form.result}
        </div>

    )
}

export default HookRef;