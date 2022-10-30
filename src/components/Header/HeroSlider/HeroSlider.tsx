import React, { useState } from 'react';
import uuid from 'react-uuid';

import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addToCart } from '../../../store/reducers/cartSlice';
import Arrows from '../../Arrows/Arrows';
import style from './HeroSlider.module.scss';

const HeroSlider: React.FC = ({ product }) => {
    const [numSlider, setNumSlider] = useState(0);
    const DecrementCount = () => {
        numSlider === 0 ? setNumSlider(product[0].images.length - 1) : setNumSlider(numSlider - 1);
    };

    const incrementCount = () => {
        numSlider === product[0].images.length - 1 ? setNumSlider(0) : setNumSlider(numSlider + 1);
    };

    const dispatch = useAppDispatch();

    const FavHanlder = (item) => {
        dispatch(
            addToCart({
                amount: 1,
                id: item.id,
                title: item.title,
                thumbnail: item.thumbnail,
                description: item.description,
                price: item.price,
                discountPercentage: item.discountPercentage,
                rating: item.rating,
                stock: item.stock,
                brand: item.brand,
                category: item.category
            })
        );
    };

    return (
        <>
            <div className={style.containerDiv}>
                {product?.map((pro) => (
                    <React.Fragment key={uuid()}>
                        <div className={style.slider} style={{ backgroundImage: `url(${pro.images[numSlider]})` }}>
                            <div className={style.description}>
                                <h2>{pro.title}</h2>
                                <p style={{ color: 'red' }}>{numSlider.length}</p>
                                <span>{pro.rating}</span>
                                <span>{pro.price}</span>
                            </div>
                            <div className={style.discount}>
                                <span>{pro.discountPercentage.toFixed(0)}%</span>
                            </div>
                            <button onClick={() => FavHanlder(pro)}>add to card</button>
                        </div>
                    </React.Fragment>
                ))}

                <div className={style.leftArrow}>
                    <Arrows direction={'left'} opacity={1} handleClick={DecrementCount} />
                </div>
                <div className={style.rightArrow}>
                    <Arrows direction={'right'} opacity={1} handleClick={incrementCount} />
                </div>
            </div>
        </>
    );
};

export default HeroSlider;
