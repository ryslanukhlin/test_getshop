import React from 'react';
import { useHistory } from 'react-router-dom';

import '../style/Phone.scss';
import qrcode from '../static/qrcode.png';

const Final = () => {
    const history = useHistory();
    const pushHomePage = () => history.push('/');

    return (
        <div className="phone">
            <div onClick={pushHomePage} className="phone__exit phone__exit_final">
                <div className="exit1 exit1_final"></div>
                <div className="exit2 exit2_final"></div>
            </div>
            <div className="qrcode">
                <div className="qrcode__txt">
                    Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
                </div>
                <img src={qrcode} alt="qrcode" className="qrcode__image" />
            </div>
            <div className="phone__banner phone__banner_final">
                <h1>ЗАЯВКА ПРИНЯТА</h1>
                <div>
                    Держите телефон под рукой. <br />
                    Скоро с Вами свяжется наш менеджер.{' '}
                </div>
            </div>
        </div>
    );
};

export default Final;
