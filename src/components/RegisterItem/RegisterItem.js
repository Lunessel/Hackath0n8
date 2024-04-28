import React from 'react';
import './register_item.scss';
import AuthTextField from "../../components/shared/AuthTextField/AuthTextField";
import {useState} from "react";
import BlackButton from "../shared/BlackButton/BlackButton";
import {useNavigate} from "react-router-dom";

import AuthService from "../../services/AuthService";

const RegisterItem = ({step, setStep}) => {
    const [name, setName] = useState();
    const [surName, setSurName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('')

    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const response = await AuthService.registration(name, surName, phoneNumber, password)
            console.log(response.data.token)
            localStorage.setItem('token', response.data.token)
            setError('')

            if(e.target.id === 'want_to_help'){
                navigate('/home/want_to_help')
            }
            else{
                navigate('/home/need_help')
            }

        } catch (e) {
            setError('Такий користувач вже існує')
        }
    }

    return (
        <form className={'register-item'} onSubmit={handleRegister}>
            <AuthTextField
                text={'Прізвище'}
                width={'230px'}
                type={'text'}
                onChange={(e) => setSurName(e.target.value)}
            />
            <AuthTextField
                text={"Ім'я"}
                width={'230px'}
                type={'text'}
                onChange={(e) => setName(e.target.value)}
            />
            <AuthTextField
                text={'Номер телефону'}
                width={'230px'}
                type={'text'}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <AuthTextField
                text={'Створіть пароль'}
                width={'230px'}
                type={'text'}
                onChange={(e) => setPassword(e.target.value)}
            />
            <h4 className={'error-filed'}>{error}</h4>
            <BlackButton id={'want_to_help'} type={'submit'} border_radius={'10px'} text={'Хочу Допомогти'}
                         width={'230px'}/>
            <BlackButton id={'need_help'}  type={'submit'}border_radius={'10px'} text={'Хочу Знайти Допомогу'}
                         width={'230px'}/>
        </form>
    );
};

export default RegisterItem;