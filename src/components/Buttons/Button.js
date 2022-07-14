import React from 'react';
import { Link } from 'react-router-dom'

const Button = ({ name, styles, path }) => {
    return (
        <button
            className={`${styles} h-10 text-sm font-semibold rounded-full`}
        >
            <Link to={path}>
                <p>{name}</p>
            </Link>
        </button>
    );
}

export default Button;