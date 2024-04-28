import React from 'react';

import './circle_stage_item.scss';

const CircleStageItem = ({step}) => {
    return (
        <div className='circle-stage-item'>

            <div className={'circle-container'} >
                <h4>Привіт</h4>
                <div className='circle' style={{backgroundColor: step >= 1 ? 'black' : 'white'}}></div>
                {/*<div className='line' style={{backgroundColor: step >= 2 ? 'black' : 'white'}}></div>*/}
            </div>
            <div className='circle-container' style={{bottom: 0, left: '54px'}}>
                <div style={{height: "19px"}}></div>
                <div className='circle' style={{backgroundColor: step >= 2 ? 'black' : 'white'}}></div>
                <h4>Зареєструйся</h4>
                {/*<h3>Зареєструйся</h3>*/}
                {/*<div className='line' style={{backgroundColor: step >= 3 ? 'black' : 'white'}}></div>*/}
            </div>
            <div className='circle-container' style={{top: 0, right: 0}}>
                <h4>Користуйся</h4>
                <div className='circle' style={{backgroundColor: step >= 3 ? 'black' : 'white'}}></div>
            </div>
        </div>
    );
};

export default CircleStageItem;