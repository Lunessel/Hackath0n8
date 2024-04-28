import React from 'react';
import './hello_item.scss';
import BlackButton from "../shared/BlackButton/BlackButton";
import high_five from './images/3d-render-hand-high-five-gesture-team-work-clap 1.svg';
import CircleStageItem from "../shared/CircleStageItem/CircleStageItem";
const HelloItem = ({step, setStep }) => {
    return (
        <div className={'hello-item'}>
            <CircleStageItem step={step}/>
            <h2>Вітаємо у "Virus"!</h2>
            <img src={high_five} alt={"high-give"}/>
            <BlackButton border_radius={'30px'} text={'Далі'} width={'180px'} onClick={() => setStep(step + 1)}/>
        </div>
    );
};

export default HelloItem;