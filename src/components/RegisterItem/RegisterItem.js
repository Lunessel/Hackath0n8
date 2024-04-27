import React from 'react';
import './register_item.scss';
import AuthTextField from "../../components/shared/AuthTextField/AuthTextField";
import {useState} from "react";
import BlackButton from "../shared/BlackButton/BlackButton";
import {useNavigate} from "react-router-dom";

const RegisterItem = ({step, setStep}) => {
    const [surName, setSurName] = useState();
    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();


    const handleRegister = async (e) => {
        if(e.target.id === 'want_to_help'){
            navigate('/home/want_to_help')
        }
        else{
            navigate('/home/need_help')
        }
    }

    return (
        <div className={'register-item'}>
            <AuthTextField
                text={'Прізвище'}
                width={'230px'}
                type={'text'}
                onChange={(e) => setSurName(e)}
            />
            <AuthTextField
                text={"Ім'я"}
                width={'230px'}
                type={'text'}
                onChange={(e) => setName(e)}
            />
            <AuthTextField
                text={'Номер телефону'}
                width={'230px'}
                type={'text'}
                onChange={(e) => setPhoneNumber(e)}
            />
            <AuthTextField
                text={'Створіть пароль'}
                width={'230px'}
                type={'text'}
                onChange={(e) => setPassword(e)}
            />
            <BlackButton id={'want_to_help'} border_radius={'10px'} text={'Хочу Допомогти'} width={'230px'}
                         onClick={handleRegister}/>
            <BlackButton id={'need_help'} border_radius={'10px'} text={'Хочу Знайти Допомогу'} width={'230px'}
                         onClick={handleRegister}/>
        </div>
    );
};

export default RegisterItem;