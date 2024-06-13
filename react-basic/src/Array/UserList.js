import React, { useEffect } from "react";
import App from "../App";

// User 컴포넌트
function User({user, onRemove, onToggle}) {
    /* 
    마운트 시에 하는 작업들.... 
    1. props 로 받은 값을 컴포넌트의 로컬 상태로 설정한다.
    2. 외부 API 요청 (REACT API 등등...)
    3. 라이브러리 사용(D3, Video.js 등등... )
    4. setInterval 을 통한 반복작업 혹은 setTimeout을 통한 작업 예약
    
    */

    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('컴포넌트가 화면에서 사라짐')
        }
    }, [])

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green':'red'
                }}
                onClick={() => onToggle(user.id)}
            >{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}


function UserList({users, onRemove, onToggle}) {

    // return (
    //     <div>
    //         <div>
    //             <b>{users[0].username}</b> <span>({users[0].email})</span>
    //         </div>
    //         <div>
    //             <b>{users[1].username}</b> <span>({users[1].email})</span>
    //         </div>
    //         <div>
    //             <b>{users[2].username}</b> <span>({users[2].email})</span>
    //         </div>
    //     </div>
    // );

    return (
        <div>
            {/* array.map() 함수를 이용한 컴포넌트 반복 */}
            
            {/* <User user={users[2]} />
            <User user={users[1]} />
            <User user={users[0]} /> */}

            {/* {users.map(user => (
                <User user = {user} key={user.id} />
            ))} */}
            
            {users.map((user) => (
                <User 
                user = {user} 
                key={user.id} 
                onRemove={onRemove} 
                onToggle={onToggle}
                />
            ))}
        </div>
    );
}
export default UserList