
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center">
            <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-gold-400 tracking-wider">
                MALCOLM KINGLEY
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-blue font-lora">
                Keeper of the Forbidden Gnosis
            </p>
        </header>
    );
};

export default Header;