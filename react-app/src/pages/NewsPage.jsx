import { useState } from 'react';
import { News } from '../Components/News/News';
import { Popup } from '../Components/Popup/Popup';

function NewsPage() {
    const [popupActive, setPopupActive] = useState(true);
    const [popupImg, setPopupImg] = useState('Тут должна быть картинка ^,,^');
    return (
        <>
            <News
                setActive={setPopupActive}
                setImage = {setPopupImg}
            />
            <Popup
                active={popupActive}
                setActive={setPopupActive}
            >
                <img className="popup-image" onClick={()=> setPopupActive(true)} src={popupImg} alt="Тут должна быть картинка ^,,^" />
            </Popup>
        </>
    );
}

export { NewsPage };
