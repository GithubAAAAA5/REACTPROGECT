import React from "react";

// input 태그 2개 -> 계정(이름) 이메일 을 받는 태그/ 버튼 태그( 추가 버튼을 통해 데이터 추가 처리하기 )
function CreateUser({username, email, onChange, onCreate }) {
    return(
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />    
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록버튼</button>
        </div>
    );
}

export default CreateUser;