import React, {useState} from 'react';
import './need_help.scss';
import AuthTextField from "../shared/AuthTextField/AuthTextField";
import BlackButton from "../shared/BlackButton/BlackButton";
import CollectionItem from "../shared/CollectionItem/CollectionItem";
import Zbir from "../WantToHelp/images/zbir.svg";
import Pidveztu from "../WantToHelp/images/pidveztu.svg";
import Dopomoga from "../WantToHelp/images/dopomoga.svg";
import PopUpModalWindow from "../shared/PopUpModalWindow/PopUpModalWindow";
import {Checkbox} from "@mui/material";
import {redirect, useNavigate} from "react-router-dom";

const NeedHelp = () => {
    const [title, setTitle] = useState('collection');
    const [mainText, setMainText] = useState();
    const [additionalText, setAdditionalText] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [isVolunteer, setIsVolunteer] = useState(true);
    const [contactsActive, setContactsActive] = React.useState(false);
    const titlePhoto = {
        collection: Zbir,
        pickup: Pidveztu,
        help: Dopomoga
    }

    const [isPickupClicked, setPickupClicked] = useState(false);
    const [isCollectionClicked, setCollectionClicked] = useState(true);
    const [isHelpClicked, setHelpClicked] = useState(false);


    const navigate = useNavigate();
    const handleSubmit = async () => {
        if(true){
            // return redirect("/success");
            navigate('/home/success')
        }
    }
    
    return (
        <div className={'need-help'}>

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
                <Checkbox onClick={() => setIsVolunteer(!isVolunteer)} defaultChecked color="success" />
            </div>

            <div>
                <textarea rows={4} placeholder={'Основний текст'} onChange={(e) => setMainText(e.target.value)}/>
            </div>
            <div>
                <textarea placeholder={'Додатковий текст'} onChange={(e) => setAdditionalText(e.target.value)}/>
            </div>
            <div>
                <textarea placeholder={'Номер телефону'} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>



            <BlackButton border_radius={'20px'} width={'180px'} text={'Попросити'} onClick={handleSubmit}/>


        </div>
    );
};

export default NeedHelp;