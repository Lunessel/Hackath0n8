import React, {useState} from 'react';

import LoginItem from "../LoginItem/LoginItem";
import RegisterItem from "../RegisterItem/RegisterItem";
import CircleStageItem from "../shared/CircleStageItem/CircleStageItem";
import './login_register_item.scss';

const LoginRegisterItem = ({step, setStep}) => {
    const [is_login_active, setIs_login_active] = useState(true);
    const changeItem = () => {
        setIs_login_active(!is_login_active)
    }
    return (
        <div className={'login-register-item'}>
            <CircleStageItem step={step}/>
            <div className={'login-register-item__input'}>
                {is_login_active && <h2>Увійди</h2>}
                {!is_login_active && <h2>Зареєструйся</h2>}
                {is_login_active && <LoginItem step={step} setStep={setStep}/>}
                {!is_login_active && <RegisterItem step={step} setStep={setStep}/>}
                {is_login_active &&
                    <button onClick={changeItem}>Ви тут вперше? <span>Зареєструйтесь зараз</span></button>}
                {!is_login_active &&
                    <button onClick={changeItem}>Вже маєш обліковий запис? <span>Увійти</span></button>}

            </div>
        </div>
    );
};

export default LoginRegisterItem;