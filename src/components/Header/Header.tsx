import React from 'react';

import HeroSlider from './HeroSlider/HeroSlider';
import Navigation from './Navigation/Navigation';

const Header: React.FC = ({ product }) => {
    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '250px, 1fr' }}>
                <Navigation />
                <HeroSlider product={product} />
            </div>
        </>
    );
};

export default Header;
