import React, { useState } from "react";

function LoopEffect() {
    // useState - 값이 지정되면 리렌더링 발생하며 무한반복
    const [name, setName] = useState({name: 'HongGilldong'});

    // 이하 무한 루프 발생
    React.useEffect(() => {
        const copy = {...name};     // 객체 전개문(spread)
        setName(copy);
    }, [name]);

    return (
        <div>
            생략....
        </div>
    )
}

export default LoopEffect;