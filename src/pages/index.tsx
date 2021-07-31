import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style/Home.scss';
import qrcode from '../static/qrcode.png';

const Home: React.FC = () => {
    const history = useHistory();

    React.useEffect(() => {
        setTimeout(() => {
            document.getElementById('homeBanner')?.classList.remove('home__banner_hidden');
        }, 5000);
    });

    const pushPhonePage = () => history.push('/phone');

    return (
        <div className="home">
            <iframe
                className="frameVideo"
                src="https://www.youtube-nocookie.com/embed/dbvi_S3fy2M?controls=0&amp;start=2340"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>

            <div id="homeBanner" className="home__banner home__banner_hidden">
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
