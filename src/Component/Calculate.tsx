import React from 'react';
import '../style/Calculate.scss';

interface props {
    onChangeInput: (value: number) => void;
    clearInput: () => void;
}

const Calculate: React.FC<props> = ({ onChangeInput, clearInput }) => {
    const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="calculate">
            {arrNumbers.map((item) => (
                <button
                    key={item}
                    onClick={onChangeInput.bind(null, item)}
                    className="calculate__item">
                    {item}
                </button>
            ))}
            <button onClick={clearInput} className="calculate__item stik_2">
                Стереть
            </button>
            <button onClick={onChangeInput.bind(null, 0)} className="calculate__item">
                0
            </button>
        </div>
    );
};

export default Calculate;
