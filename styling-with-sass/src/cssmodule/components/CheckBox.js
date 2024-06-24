import React from "react";
import{MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
import styles from './CheckBox.module.css';
import classNames from "classnames/bind";
// 1. CheckBox 생성
// 2. CheckBox icon 사용...
//  react-icons 를 설치. Font Awesome, Ionicons, Material Design icons 등을
//  쉽게 사용할 수 있게 하는 라이브러리
// 3. classnames/bind 사용 => classNames.bind(styles);
//     const cx = classNames.bind(styles);
//      cx('클래스 이름') 으로 사용이 가능하다.
const cx = classNames.bind(styles);

function CheckBox({children, checked, ...rest}) {
    return (
        <div className={cx('checkbox', 'test')}> {/* className ='checkbox test */}
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div className={cx('icon')}>
                    {checked? 
                        <MdCheckBox className={cx('checked-icon')} />
                            : 
                        <MdCheckBoxOutlineBlank/>}
                    </div>
            </label>
            <span>{children}</span>
        </div>
    );
}

// function CheckBox({children, checked, ...rest}) {
//     return (
//         <div className={styles.checkbox}>
//             {/* label 중요 */}
//             <label>
//                 <input type="checkbox" checked={checked} {...rest} />
//                 <div className={styles.icon}>
//                     {checked? 
//                     <MdCheckBox className={styles['checked-icon']} />
//                         : 
//                     <MdCheckBoxOutlineBlank/>}
//                 </div>
//             </label>
//             <span>{children}</span>
//         </div>
//     );
// }

export default CheckBox;