import React from 'react';

const Button = ({ name, style }) => {
    return (
        <button
            className={`${style} h-10 text-sm font-semibold rounded-full`}
        >
            <p>{name}</p>
        </button>
    );
}

export default Button;