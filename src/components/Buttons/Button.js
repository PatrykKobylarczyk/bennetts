import React from 'react';

const Button = ({ width, margin, name }) => {
    return (
        <button
            className={`${width} h-10 ${margin} bg-black rounded-full text-white text-sm `}
        >
            <p>{name}</p>
        </button>
    );
}

export default Button;