import {Route, Routes, useNavigate} from 'react-router-dom';
import LandingPage from "./components/pages/LandingPage/LandingPage";
import HomePage from "./components/pages/HomePage/HomePage";
import './App.css';
import {useEffect} from "react";

function App() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token'))
            navigate('/home/want_to_help')
    }, []);

    return (
        <div className={"App"}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home/*" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;