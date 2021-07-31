import React from 'react';
import { useHistory } from 'react-router-dom';
import Calculate from '../Component/Calculate';
import '../style/Phone.scss';
import qrcode from '../static/qrcode.png';

const Phone: React.FC = () => {
    const history = useHistory();
    const [phone, setPhone] = React.useState<string>('');
    const [check, setCheck] = React.useState<boolean>(false);
    const [disabled, setDisabled] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (phone.length === 10 && check) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [check, phone.length]);

    const pushHomePage = () => history.push('/');

    const onChangeInput = (value: number) => {
        if (phone.length === 10) return;

        setPhone((prev) => {
            if (prev) {
                return prev + String(value);
            }
            return String(value);
        });
        const contentInput = document
            .getElementById('phoneInput')!
            .innerText.replace('_', String(value));

        document.getElementById('phoneInput')!.innerText = contentInput;
    };

    const clearInput = () => {
        document.getElementById('phoneInput')!.innerText = '+7(___)___-__-__';
        setPhone('');
    };

    const onConfirm = () => history.push('/final');
    return (
        <div className="phone">
            <div onClick={pushHomePage} className="phone__exit">
                <div className="exit1"></div>
                <div className="exit2"></div>
            </div>
            <div className="qrcode">
                <div className="qrcode__txt">
                    Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
                </div>
                <img src={qrcode} alt="qrcode" className="qrcode__image" />
            </div>
            <div className="phone__banner">
                <h1>Введите ваш номер мобильного телефона</h1>
                <div id="phoneInput" className="phone__numbers">
                    +7(___)___-__-__
                </div>
                <div className="phone__txt">
                    и с Вами свяжется наш менеждер для дальнейшей консультации
                </div>
                <Calculate clearInput={clearInput} onChangeInput={onChangeInput} />
                <div className="phone__wrapperInput">
                    <input
                        type="checkbox"
                        id="coding"
                        name="interest"
                        defaultChecked={check}
                        onChange={() => {
                            setCheck((prev) => !prev);
                        }}
                        value="coding"
                        className="phone__input"
                    />
                    <label htmlFor="coding" className="phone__label">
                        Согласие на обработку
                        <br />
                        персональных данных
                    </label>
                </div>
                <button disabled={disabled} onClick={onConfirm} className="phone__btn">
                    Подтвердить номер
                </button>
            </div>
        </div>
    );
};

export default Phone;
