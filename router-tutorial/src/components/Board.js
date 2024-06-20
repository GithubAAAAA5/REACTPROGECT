import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Board() {

    const myStyle = {
        background: "black",
        color: "white"
    };

    return (
        <div>
             <header />
            <h3>게시글 목록</h3>
            <ul>
                {/*<li><Link to='/board/1'>글1</Link></li>
                <li><Link to='/board/2'>글2</Link></li>
                <li><Link to='/board/3'>글3</Link></li>
                <li><Link to='/board/4'>글4</Link></li>
                <li><Link to='/board/5'>글5</Link></li>*/}

                {/* NavLink 사용 */}
                <li>
                    <NavLink to='/board/1' style={({isActive}) => {
                        return isActive ? myStyle : undefined
                    }}>
                        글1
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/board/2' style={({isActive}) => {
                        return isActive ? myStyle : undefined
                    }}>
                        글2
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/board/3' style={({isActive}) => {
                        return isActive ? myStyle : undefined
                    }}>
                        글3
                    </NavLink>
                </li>
            </ul>
        <hr />
        <div>
            <h3>유저 정보</h3>
            <ul>
                <li><Link to='/Profiles/1'>테스트유저1</Link></li>
                <li><Link to='/Profiles/2'>테스트유저2</Link></li>
            </ul>
        </div>
        <hr />
            {/* <Outlet>을 사용하여 하위 컴포넌트를 출격한다. */}
            <Outlet />
        </div>
        
    );
}

export default Board;