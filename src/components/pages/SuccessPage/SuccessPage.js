import React from 'react';

import BlackButton from "../../shared/BlackButton/BlackButton";
import Hands from './images/3d-render-hand-high-five-gesture-team-work-clap 1.svg'
import {useNavigate} from "react-router-dom";
import './success_page.scss'

const SuccessPage = () => {
    const navigate = useNavigate();


    const handleSuccess = async () => {
        navigate('/home/want_to_help')
    }

    return (
        <div className={'success-page'}>
            <h2>Запит успішний!</h2>
            <img src={Hands} alt={'hands'} />
            <BlackButton border_radius={'20px'} width={'180px'} text={'Допомогти'} onClick={handleSuccess}/>

        </div>
    );
};

export default SuccessPage;