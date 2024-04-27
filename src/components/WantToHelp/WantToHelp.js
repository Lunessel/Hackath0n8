import React, {useState} from 'react';
import './want_to_help.scss';
import CollectionItem from "../shared/CollectionItem/CollectionItem";
import PopUpModalWindow from "../shared/PopUpModalWindow/PopUpModalWindow";
import Logo from './images/logo_test.svg';
import Lock from './images/material-symbols_lock-outline.svg';
import Zbir from './images/zbir.svg';
import Pidveztu from './images/pidveztu.svg';
import Dopomoga from './images/dopomoga.svg';

const WantToHelp = () => {
    const [phoneNumber, setPhoneNumber] = useState()
    const [contactsActive, setContactsActive] = React.useState(false);
    const titlePhoto = {
        collection: Zbir,
        pickup: Pidveztu,
        help: Dopomoga
    }

    return (
        <div className={'want-to-help'}>
            <div className={'logo-moto'}>
                <img src={Logo} alt="logo"/>
                <h2>Тут Люди які хочуть саме твоєї допомоги</h2>
            </div>
            {/*</div>*/}
            {/*/!*<div className={'want-to-help__filter'}>*!/*/}
            {/*/!*    <button>Фільтр <img src={Lock} alt={"lock"}/></button>*!/*/}
            {/*</div>*/}
            <div className={'collection'}>
                <CollectionItem
                    title={"collection"}
                    main_text={"Терміновий збір на пікап для ЗСУ 115 бригада"}
                    additional_text={"Ціль: 15000 UAH"}
                    contacts={"099 222 46 93"}
                    setPhoneNumber={setPhoneNumber}
                    setActive={setContactsActive}
                    photo={titlePhoto}
                />
                <CollectionItem
                    title={"pickup"}
                    main_text={"Терміновий збір на пікап для ЗСУ 115 бригада"}
                    additional_text={"Ціль: 15000 UAH"}
                    contacts={"099 222 46 93"}
                    setPhoneNumber={setPhoneNumber}
                    setActive={setContactsActive}
                    photo={titlePhoto}
                />
                <CollectionItem
                    title={"help"}
                    main_text={"Терміновий збір на пікап для ЗСУ 115 бригада"}
                    additional_text={"Ціль: 15000 UAH"}
                    contacts={"099 222 46 93"}
                    setPhoneNumber={setPhoneNumber}
                    setActive={setContactsActive}
                    photo={titlePhoto}
                />
                <CollectionItem
                    title={"collection"}
                    main_text={"Терміновий збір на пікап для ЗСУ 115 бригада"}
                    additional_text={"Ціль: 15000 UAH"}
                    contacts={"099 222 46 93"}
                    setPhoneNumber={setPhoneNumber}
                    setActive={setContactsActive}
                    photo={titlePhoto}
                />
                <CollectionItem
                    title={"collection"}
                    main_text={"Терміновий збір на пікап для ЗСУ 115 бригада"}
                    additional_text={"Ціль: 15000 UAH"}
                    contacts={"099 222 46 93"}
                    setPhoneNumber={setPhoneNumber}
                    setActive={setContactsActive}
                    photo={titlePhoto}
                />
            </div>

            <PopUpModalWindow active={contactsActive} setActive={setContactsActive} children={
                <div>
                    <p style={{color: 'white'}}>Номер телефону: {phoneNumber}</p>
                </div>
            }/>
        </div>
    );
};

export default WantToHelp;