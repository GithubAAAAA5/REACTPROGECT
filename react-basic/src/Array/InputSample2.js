import React, { useState } from "react";
// useRef 확인..

function InputSample2() {

    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    });

    // useRef
    const nameInput = useRef();

    const {name, nickname} = inputs;

    const onChange = e => {
        setInputs({
            ...inputs,
            [name]:value
        });
    }

    const onReset = () => {
        setInputs({
        name:'',
        nickname:''
    });
    nameInput.current.focus();
}

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}
export default InputSample2;