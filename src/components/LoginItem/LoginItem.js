import React, {useState} from 'react';
import './login_item.scss';
import AuthTextField from "../shared/AuthTextField/AuthTextField";
import BlackButton from "../shared/BlackButton/BlackButton";
import {useNavigate} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AuthService from "../../services/AuthService";

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
            console.log(localStorage.getItem('token'))
            setError('')
            // navigate('/home/want_to_help')
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