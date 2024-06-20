import React from "react";
import { Navigate, Route, useNavigate, useSearchParams } from "react-router-dom";

function MyPage() {

    // useNavigate() 훅.. 이벤트 처리시 사용한다.
    /* 렌더링 과정에서 useNavigate() 훅을 사용할 수 없다는 경고 후 동작 X
    let nav = useNavigate();
    let loginYN = false;    // 로그인? 아님!
    if(!loginYN) {
        nav('/');
    } */

    // 쿼리 스트링을 사용하여 login 여부를 전달한다. (true or false)
    // 로그인 여부에 따라서 동작 하는지 확인하기.
    const [obj] = useSearchParams();



    // Navigate 컴포넌트
    let loginYN = obj.get('login'); // 로그인? 아님
    if(!loginYN) {
        return <Navigate to='/' replace={true} />
    }

    return (
        <div>
            이곳은 로그인한 사용자만 접근이 가능한 페이지 입니다.

        </div>
    );

}

export default MyPage;