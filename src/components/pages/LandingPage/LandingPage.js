import React from 'react';

import HelloItem from "../../HelloItem/HelloItem";
import LoginRegisterItem from "../../LoginRegisterItem/LoginRegisterItem";
import './landing_page.scss';

const LandingPage = () => {
    const [step, setStep] = React.useState(1);
    return (
        <div className={'landing-page'}>
            {step === 1 && <HelloItem step={step} setStep={setStep}/>}
            {step === 2 && <LoginRegisterItem step={step} setStep={setStep}/>}

        </div>
    );
};

export default LandingPage;