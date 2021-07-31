import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Home.scss';
import qrcode from '../static/qrcode.png';

const Home: React.FC = () => {
    const history = useHistory();

    const pushPhonePage = () => history.push('/phone');

    return (
        <div className="home">
            <div className="home__banner">
                <h1>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</h1>
                <img src={qrcode} alt="qrcode" className="home__qrcode" />
                <div className="home__subtxt">
                    Сканируйте QR-код <br /> или нажмите ОК
                </div>
                <button onClick={pushPhonePage} className="btn">
                    ОК
                </button>
            </div>
        </div>
    );
};

export default Home;
