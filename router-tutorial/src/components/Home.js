import React from "react";
import { Link } from "react-router-dom"
import Header from "./Header";

function Home() {

    return (
        <div>
            {/* 
            <ul>
                    Link 태그를 이용해서 다른 페이지로 이동한다.
                    to 속성을 이용해서 연결할 주소를 적는다.
                    어느 컴포넌트든 사용이 가능하다.
                **  Routes 사이에 있는 경로를 이동할 떄 사용한다.
                */}
                {/*
            <li><Link to ="/">홈</Link></li>    
            <li><Link to="/user">회원페이지</Link></li>
            <li><Link to="/info">정보페이지</Link></li>
            <li><a href="/user">회원페이지(a태그)</a></li>
           
                <li>
                    <Link to="/user?id=aaa111&key=1">회원 페이지(쿼리 param 처리...)</Link>
                </li>
            </ul>
            */}


            <Header />
            <hr />
            <ul>
                <li>
                    <Link to='/info/1'>1번 Info</Link>
                </li>
                <li>    
                    <Link to='/info/2'>2번 Info</Link>
                </li>
                <li>    
                    <Link to='/info/3'>3번 Info</Link>
                </li>
                <li>
                    <Link to='/mypage'> 마이 페이지로 이동하기 </Link>
                </li>
            </ul>
            <h2>홈 페이지</h2>
            <p> 지금 보여지는 곳은 홈 입니다. 사이트의 대문 입니다.</p>
            
        </div>
    );
}

export default Home;