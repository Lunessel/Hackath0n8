import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Checkbox} from "@mui/material";

import HelpService from "../../services/HelpService";
import BlackButton from "../shared/BlackButton/BlackButton";
import CollectionItem from "../shared/CollectionItem/CollectionItem";
import PopUpModalWindow from "../shared/PopUpModalWindow/PopUpModalWindow";

import Zbir from "../WantToHelp/images/zbir.svg";
import Pidveztu from "../WantToHelp/images/pidveztu.svg";
import Dopomoga from "../WantToHelp/images/dopomoga.svg";
import './need_help.scss';

const NeedHelp = () => {
    const titlePhoto = {
        collection: Zbir,
        pickup: Pidveztu,
        help: Dopomoga
    }

    const [title, setTitle] = useState('collection');
    const [mainText, setMainText] = useState();
    const [additionalText, setAdditionalText] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [isVolunteer, setIsVolunteer] = useState(true);
    const [contactsActive, setContactsActive] = React.useState(false);
    const [myRequests, setMyRequests] = useState([])
    const [isPickupClicked, setPickupClicked] = useState(false);
    const [isCollectionClicked, setCollectionClicked] = useState(true);
    const [isHelpClicked, setHelpClicked] = useState(false);

    const navigate = useNavigate();


    const fetchData = useCallback(async () => {
        const response = await HelpService.get_my_help_requests();
        setMyRequests(response.data.items)
    }, [])

    useEffect( () => {

        fetchData()
    }, [ fetchData]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await HelpService.post_help_request(
            title,
            mainText,
            additionalText,
            phoneNumber,
            isVolunteer
            )
        if(result.status === 200){
            navigate('/home/success')
        }
    }

    
    return (
        <form className={'need-help'} onSubmit={handleSubmit}>
            {myRequests !== [] && <div className={'your-requests'}>
                <h3>Твої запити</h3>
                <div>
                    {myRequests.map((item, index) => (
                        <CollectionItem
                            key={index}
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
            </div>}

            <h3>Шаблон</h3>
            <CollectionItem
                title={title}
                main_text={mainText}
                additional_text={additionalText}
                contacts={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                setActive={setContactsActive}
                photo={titlePhoto}
                isVolunteer={isVolunteer}
            />
            <PopUpModalWindow active={contactsActive} setActive={setContactsActive} children={
                <div>
                    <p style={{color: 'white'}}>Номер телефону: {phoneNumber}</p>
                </div>
            }/>

            <div className={'choose'}>
                <h3>Вибери іконку</h3>
                <div className={'buttons'}>
                    <div className={'button-item'}>
                        <div>
                            <img id={'pickup'}
                                 onClick={(e) => {
                                     setTitle(e.target.id);
                                     if (!isPickupClicked)
                                         setPickupClicked(!isPickupClicked);
                                     setHelpClicked(false);
                                     setCollectionClicked(false);
                                 }}
                                 className={isPickupClicked ? 'image-clicked' : 'image-unclicked'}
                                 src={Pidveztu}
                                 alt="photo"/>
                        </div>
                        <h4>Підвезти</h4>
                    </div>
                    <div className={'button-item'}>
                        <div>
                            <img id={'collection'}
                                 onClick={(e) => {
                                     setTitle(e.target.id);
                                     if (!isCollectionClicked)
                                         setCollectionClicked(!isCollectionClicked);
                                     setHelpClicked(false);
                                     setPickupClicked(false);
                                 }}
                                 className={isCollectionClicked ? 'image-clicked' : 'image-unclicked'}
                                 src={Zbir}
                                 alt="photo"/>
                        </div>
                        <h4>Збір</h4>
                    </div>
                    <div className={'button-item'}>
                        <div>
                            <img id={'help'}
                                 onClick={(e) => {
                                     setTitle(e.target.id);
                                     if (!isHelpClicked)
                                         setHelpClicked(!isHelpClicked);
                                     setPickupClicked(false);
                                     setCollectionClicked(false);
                                 }}
                                 className={isHelpClicked ? 'image-clicked' : 'image-unclicked'}
                                 src={Dopomoga}
                                 alt="photo"/>
                        </div>
                        <h4>Допомога</h4>
                    </div>
                </div>
            </div>

            <div className={'volunteer'}>
                <h4>Волонтер</h4>
                <Checkbox onClick={() => setIsVolunteer(!isVolunteer)} defaultChecked color="success"/>
            </div>

            <div>
                <textarea required rows={4} placeholder={'Основний текст'} onChange={(e) => setMainText(e.target.value)}/>
            </div>
            <div>
                <textarea required placeholder={'Додатковий текст'} onChange={(e) => setAdditionalText(e.target.value)}/>
            </div>
            <div>
                <textarea required placeholder={'Номер телефону'} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>


            <BlackButton type={'submit'} border_radius={'20px'} width={'180px'} text={'Попросити'}/>


        </form>
    );
};

export default NeedHelp;