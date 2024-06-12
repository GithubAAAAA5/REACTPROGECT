import React from "react";
import App from "../App";

// User 컴포넌트
function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}


function UserList({users}) {

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
            
            {users.map((user, index) => (
                <User user = {user} key={index} />
            ))}
        </div>
    );
}
export default UserList