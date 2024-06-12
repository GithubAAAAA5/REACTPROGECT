import React from "react";

function UserList() {
    const users = [
        {
            id: 1,
            username: 'HongGildong',
            email: 'Hong@naver.com'
        },
        {
            id: 2,
            username: 'LeeSoonsin',
            email: 'Lee@naver.com'
        },
        {
            id: 3,
            username: 'RyuGwansoon',
            email: 'Ryu@naver.com'
        },
    ];

    return (
        <div>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </div>
    );

}
export default UserList