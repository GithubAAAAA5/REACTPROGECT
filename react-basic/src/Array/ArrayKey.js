import React from "react";

// const item = (props) => {
//     return(
//         <div>
//             {props.text}
//         </div>
//     );
// }

function ArrayKey() {

    const test = ['a', 'b', 'z', 'c', 'd', 'e'];
    const test2 = [
        {
            id: 1,
            text: 'a'
        },
        {
            id:2,
            text: 'b'
        },
        {
            id:5,
            text: 'z'
        },
        {
            id:3,
            text: 'c'
        },
        {
            id:4,
            text: 'd'
        }
    ]
    
    return(
        <>
        {/* {test.map(item => (
        <div>{item}</div>
        ))} */}
        {test2.map(item =>
            <div key={item.id}>{item.text}</div>
        )}
        </>
    );
}
export default ArrayKey;


