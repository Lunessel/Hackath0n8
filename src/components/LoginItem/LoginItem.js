import React, {useState} from 'react';
import './login_item.scss';
import AuthTextField from "../shared/AuthTextField/AuthTextField";
import BlackButton from "../shared/BlackButton/BlackButton";
import {useNavigate} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

const LoginItem = ({step, setStep}) => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();


    const handleRegister = async () => {
        navigate('/home/want_to_help')

    }

    return (
        <div className={'login-item'}>
                <AuthTextField
                    text={'Номер телефону'}
                    width={'230px'}
                    type={'tel'}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <AuthTextField
                    text={'Пароль'}
                    width={'230px'}
                    type={'text'}
                    onChange={(e) => setPassword(e.target.value)}
                />
            <BlackButton border_radius={'10px'} text={'Увійти'} width={'230px'}
                         onClick={handleRegister}/>
        </div>
    );
};

export default LoginItem;