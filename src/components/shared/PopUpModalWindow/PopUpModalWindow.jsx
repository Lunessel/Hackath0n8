import React from 'react';

import './pop_up_modal_window.scss';

const PopUpModalWindow = ({active, setActive, children, header_text}) => {
    return (
        <div className={active ? 'pop-up-modal active' : 'pop-up-modal inactive'} onClick={() => setActive(false)}>
            <div className={active ? 'pop-up-modal__content active' : 'pop-up-modal__content inactive'} onClick={e => e.stopPropagation()}>
                <div>
                    {/*{header_text && <h3>{header_text}</h3>}*/}
                    {/*{!header_text && <h3>{" "}</h3>}*/}
                    {/*<img src={close_cross} alt={'close'} onClick={() => setActive(false)}/>*/}
                </div>
                {children}
            </div>
        </div>
    );
};

export default PopUpModalWindow;