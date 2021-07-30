import React from 'react';
import '../style/Home.scss';
import qrcode from '../static/qrcode.png';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home__banner">
                <h1>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</h1>
                <img src={qrcode} alt="qrcode" className="home__qrcode" />
                <div className="home__subtxt">
                    Сканируйте QR-код <br /> или нажмите ОК
                </div>
                <button className="btn">ОК</button>
            </div>
        </div>
    );
};

export default Home;
