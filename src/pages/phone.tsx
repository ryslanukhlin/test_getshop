import React from 'react';
import Calculate from '../Component/Calculate';
import '../style/Phone.scss';

const Phone: React.FC = () => {
    return (
        <div className="phone">
            <div className="phone__banner">
                <h1>Введите ваш номер мобильного телефона</h1>
                <div className="phone__numbers">+7(___)___-__-__</div>
                <div className="phone__txt">
                    и с Вами свяжется наш менеждер для дальнейшей консультации
                </div>
                <Calculate />
                <div className="phone__wrapperInput">
                    <input
                        type="checkbox"
                        id="coding"
                        name="interest"
                        value="coding"
                        className="phone__input"
                    />
                    <label htmlFor="coding" className="phone__label">
                        Согласие на обработку
                        <br />
                        персональных данных
                    </label>
                </div>
                <button className="phone__btn">Подтвердить номер</button>
            </div>
        </div>
    );
};

export default Phone;
