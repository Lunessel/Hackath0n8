import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import AuthService from "../../services/AuthService";

import AuthTextField from "../shared/AuthTextField/AuthTextField";
import BlackButton from "../shared/BlackButton/BlackButton";
import './login_item.scss';

const LoginItem = ({step, setStep}) => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('')

    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault()
        try {

            const response = await AuthService.login(phoneNumber, password)
            localStorage.setItem('token', response.data.token)
            setError('')
            navigate('/home/want_to_help')
        }
        catch (e){
            setError('Такого користувача не знайдено')
        }

    }

    return (
        <form className={'login-item'} onSubmit={handleLogin}>
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
            <h4 className={'error-filed'}>{error}</h4>
            <BlackButton type={'submit'} border_radius={'10px'} text={'Увійти'} width={'230px'}/>
        </form>
    );
};

export default LoginItem;