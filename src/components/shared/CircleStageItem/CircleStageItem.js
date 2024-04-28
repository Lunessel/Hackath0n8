import React from 'react';

import './circle_stage_item.scss';

const CircleStageItem = ({step}) => {
    return (
        <div className='circle-stage-item'>

            <div className={'circle-container'} >
                <h3>Привіт</h3>
                <div className='circle' style={{backgroundColor: step >= 1 ? 'black' : 'white'}}></div>
                {/*<div className='line' style={{backgroundColor: step >= 2 ? 'black' : 'white'}}></div>*/}
            </div>
            <div className='circle-container' style={{bottom: 0, left: '54px'}}>
                <div className='circle' style={{backgroundColor: step >= 2 ? 'black' : 'white'}}></div>
                <h3>Зареєструйся</h3>
                {/*<div className='line' style={{backgroundColor: step >= 3 ? 'black' : 'white'}}></div>*/}
            </div>
            <div className='circle-container' style={{top: 0, right: 0}}>
                <h3>Користуйся</h3>
                <div className='circle' style={{backgroundColor: step >= 3 ? 'black' : 'white'}}></div>
            </div>
        </div>
    );
};

export default CircleStageItem;