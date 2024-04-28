import React from 'react';
import {NavLink} from "react-router-dom";

import lock from './images/material-symbols_lock-outline.svg';
import './nav_bar.scss';

const NavBar = () => {
    const [step, setStep] = React.useState(1);
    return (
        <div className={'nav-bar'}>
            <NavLink className={({isActive}) => isActive ? 'is-active' : 'is-inactive'} to={'/home/want_to_help'}>Допомогти</NavLink>
            <div>
                <h3>Сповіщення</h3>
                <img src={lock}/>
            </div>
            <NavLink className={({isActive}) => isActive ? 'is-active' : 'is-inactive'} to={'/home/need_help'}>Знайти Допомогу</NavLink>
        </div>
    );
};

export default NavBar;