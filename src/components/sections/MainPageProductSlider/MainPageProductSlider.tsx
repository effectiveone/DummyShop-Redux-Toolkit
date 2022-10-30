import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaClock, FaGift, FaTruckMoving } from 'react-icons/fa';
import { HiRefresh } from 'react-icons/hi';
import uuid from 'react-uuid';

import { useGetProductsQuery } from '../../../store/reducers/itemSlice';
import Arrows from '../../Arrows/Arrows';
import styles from './MainPageProductSlider.module.scss';
import SlideSchema from './SlideSchema';

const MainPageProductSlider: React.FC = () => {
    const { data } = useGetProductsQuery();
    const slides = data?.products;

    const [slideItem, setSlideItem] = useState(0);
    const incrementCountSlide = () => {
        setSlideItem(slideItem + 6);
    };
    const DecrementCountSlide = () => {
        setSlideItem(slideItem - 6);
    };

    const PropsOfShooping = [
        { name: '30 Days return', color: '#EB8441', comp: <HiRefresh /> },
        { name: 'Free Shipping', color: '#0B5BDB', comp: <FaGift /> },
        { name: '14-Day Return', color: '#00F241', comp: <FaTruckMoving /> },
        { name: '24/7 Support', color: '#E8CE00', comp: <FaClock /> }
    ];

    return (
        <>
            <div className={styles.border}>
                {PropsOfShooping.map((Props) => (
                    <div key={uuid()} className={styles.props} style={{ backgroundColor: Props.color }}>
                        <IconContext.Provider value={{ size: '50px', color: 'white', className: 'global-class-name' }}>
                            <div>{Props.comp}</div>
                        </IconContext.Provider>
                        <p>{Props.name}</p>
                    </div>
                ))}
            </div>

            {slides && (
                <>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(6, 1fr)',
                            position: 'relative',
                            paddingBottom: '50px'
                        }}
                    >
                        {slides.slice(slideItem, slideItem + 6).map((slide) => {
                            return (
                                <React.Fragment key={uuid()}>
                                    <SlideSchema {...slide} />
                                    {slideItem > 0 && (
                                        <div style={{ position: 'absolute', top: '30%', left: '-2%' }}>
                                            <Arrows direction={'left'} opacity={1} handleClick={DecrementCountSlide} />
                                        </div>
                                    )}
                                    {slideItem < 5 && (
                                        <div style={{ position: 'absolute', top: '30%', right: '0%' }}>
                                            <Arrows direction={'right'} opacity={1} handleClick={incrementCountSlide} />
                                        </div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </>
            )}
        </>
    );
};

export default MainPageProductSlider;
