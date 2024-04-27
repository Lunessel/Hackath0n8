import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import NavBar from "../../NavBar/NavBar";
import './home_page.scss';
import WantToHelp from "../../WantToHelp/WantToHelp";
import NeedHelp from "../../NeedHelp/NeedHelp";
import SuccessPage from "../SuccessPage/SuccessPage";

const HomePage = () => {
    const location = useLocation();

    return (
        <div className={'home-page'}>
            {location.pathname !== '/home/success' ? <NavBar/> : null}
            <Routes>
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="want_to_help" element={<WantToHelp />}/>
                <Route path="need_help" element={<NeedHelp />}/>
                <Route path="success" element={<SuccessPage />}/>
            </Routes>
        </div>
    );
};

export default HomePage;