import React from "react";
import{MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
// 1. CheckBox 생성
// 2. CheckBox icon 사용...
//  react-icons 를 설치. Font Awesome, Ionicons, Material Design icons 등을
//  쉽게 사용할 수 있게 하는 라이브러리

function CheckBox({children, checked, ...rest}) {
    return (
        <div>
            {/* label 중요 */}
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div>{checked? <MdCheckBox />: <MdCheckBoxOutlineBlank />}</div>
            </label>
            <span>{children}</span>
        </div>
    );
}

export default CheckBox;