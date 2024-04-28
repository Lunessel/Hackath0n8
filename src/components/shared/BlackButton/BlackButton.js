import React from 'react';

import './black_button.scss';

const BlackButton = ({border_radius, text, width, ...props} ) => {
    return (
        <div>
            <button {...props} className={'black-button'} style={{borderRadius: border_radius, width: width }}>{text}</button>
        </div>
    );
};

export default BlackButton;