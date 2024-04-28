import React, {useCallback, useEffect, useState} from 'react';
import HelpService from "../../services/HelpService";

import Pagination from 'rc-pagination';
import CollectionItem from "../shared/CollectionItem/CollectionItem";
import PopUpModalWindow from "../shared/PopUpModalWindow/PopUpModalWindow";

import Logo from './images/logo.svg';
import Zbir from './images/zbir.svg';
import Pidveztu from './images/pidveztu.svg';
import Dopomoga from './images/dopomoga.svg';
import 'rc-pagination/assets/index.css'
import './want_to_help.scss';


const WantToHelp = () => {
    const limit = 3;
    const [total, setTotal] = useState(0)
    const [helpRequests, setHelpRequests] = useState([])
    const [phoneNumber, setPhoneNumber] = useState()
    const [contactsActive, setContactsActive] = React.useState(false);
    const titlePhoto = {
        collection: Zbir,
        pickup: Pidveztu,
        help: Dopomoga
    }

    const fetchData = useCallback(async (offset) => {
        const response = await HelpService.get_help_requests(limit, offset);

        setHelpRequests(response.data.items)
        setTotal(response.data.total)
    }, [])

    useEffect( () => {

        fetchData(0)
    }, [ fetchData]);

    const changePageNumber = (e) => {
        fetchData(limit*(e-1))
    }

    return (
        <div className={'want-to-help'}>
            <div className={'logo-moto'}>
                <div>
                    <img src={Logo} alt="logo" style={{width: '80px'}}/>
                </div>
                <h2>Тут Люди які хочуть саме твоєї допомоги</h2>
            </div>
            <div className={'collection'}>
                {helpRequests.map((item, index) => (
                    <CollectionItem
                        key = {index}
                        title={item.title}
                        main_text={item.text}
                        additional_text={item.extra_text}
                        contacts={item.phone_number}
                        isVolunteer={item.is_volunteer}
                        setPhoneNumber={setPhoneNumber}
                        setActive={setContactsActive}
                        photo={titlePhoto}
                    />
                ))}
            </div>

            <Pagination
                className={'rc-pagination'}
                total={total}
                pageSize={limit}
                onChange={changePageNumber}
            />

            <PopUpModalWindow active={contactsActive} setActive={setContactsActive} children={
                <div>
                    <p style={{color: 'white'}}>Номер телефону: {phoneNumber}</p>
                </div>
            }/>
        </div>
    );
};

export default WantToHelp;