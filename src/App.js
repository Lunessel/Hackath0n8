import { Route, Routes } from 'react-router-dom';
import LandingPage from "./components/pages/LandingPage/LandingPage";
import HomePage from "./components/pages/HomePage/HomePage";
import './App.css';

function App() {
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