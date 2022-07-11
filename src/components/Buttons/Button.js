import React from 'react';

const Button = ({ width, margin, name, color, bg }) => {
    return (
        <button
            className={`${width} h-10 ${margin} ${color} ${bg} text-sm rounded-full`}
        >
            <p>{name}</p>
        </button>
    );
}

export default Button;