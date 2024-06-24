import React, { useState } from "react";

function InputSample() {

    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const {name, nickname} = inputs;

    // change 이벤트 객체
    const onChange = (e) => {
        // console.log(e)
        // console.log(e.target);
        // console.log(e.target.value);
        // setText(e.target.vaule);
        const {value, name} = e.target; // name과 value 를 추출한다.
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    // 쵝화 버튼 이벤트
    const onReset = () => {
        // setText('');
        setInputs({
            name:'',
            nickname: ''
        });
    };

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
export default InputSample;