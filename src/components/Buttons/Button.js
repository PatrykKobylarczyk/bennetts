import React from 'react';

const Button = ({ name, styles }) => {
    return (
        <button
            className={`${styles} h-10 text-sm font-semibold rounded-full`}
        >
            <p>{name}</p>
        </button>
    );
}

export default Button;