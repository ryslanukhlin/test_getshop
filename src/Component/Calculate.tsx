import React from 'react';
import '../style/Calculate.scss';

const Calculate: React.FC = () => {
    return (
        <div className="calculate">
            <button className="calculate__item">1</button>
            <button className="calculate__item">2</button>
            <button className="calculate__item">3</button>
            <button className="calculate__item">4</button>
            <button className="calculate__item">5</button>
            <button className="calculate__item">6</button>
            <button className="calculate__item">7</button>
            <button className="calculate__item">8</button>
            <button className="calculate__item">9</button>
            <button className="calculate__item stik_2">Стереть</button>
            <button className="calculate__item">0</button>
        </div>
    );
};

export default Calculate;
