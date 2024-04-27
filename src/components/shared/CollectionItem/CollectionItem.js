import React from 'react';
import './collection_item.scss';
import PopUpModalWindow from "../PopUpModalWindow/PopUpModalWindow"

import Volunteer from './images/volunteer.svg';

const CollectionItem = ({title, main_text, additional_text, contacts, photo, isVolunteer= true, setPhoneNumber, setActive}) => {
    const handleContacts = () => {
        setPhoneNumber(contacts);
        setActive(true);
    }
    const titleText = {
        collection: "Збір",
        pickup: "Підвезти",
        help: "Допомога"
    }

    return (
        <div className={'collection-item'}>
            <div className={'collection-item__inner'}>
                <h3>{titleText[title]}</h3>
            </div>
            <div className={'collection-item__content'}>
                <div>
                    <img src={photo[title]} alt="photo"/>
                </div>
                <div className={'collection-item__description'}>
                    <p>{main_text}</p>
                    <p>{additional_text}</p>
                </div>
            </div>

            <div className={'collection-item__button'}>
                <button onClick={handleContacts}>Контакти</button>
            </div>

            {isVolunteer && <img src={Volunteer} alt="volonter"/>}
        </div>
    );
};

export default CollectionItem;