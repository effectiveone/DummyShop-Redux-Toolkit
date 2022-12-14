import Link from 'next/link';

import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillBasketFill, BsFillBookmarkCheckFill } from 'react-icons/bs';

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { addToCart } from '../../../store/reducers/cartSlice';
import { AddToWatchList } from '../../../store/reducers/watchListSlice';
import styles from './MainPageProductSlider.module.scss';

const SlideSchema = (props: any) => {
    const addButton = (
        <div style={{ position: 'absolute', left: '9px', top: '0px' }}>
            <IconContext.Provider value={{ color: '3C3C3C', size: '50px', className: 'iconClass' }}>
                <div className="fav">
                    <BsFillBookmarkCheckFill />
                </div>
            </IconContext.Provider>
        </div>
    );

    const dispatch = useAppDispatch();

    const FavHanlder = (item, index) => {
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
    const listOfWatchList = useAppSelector((state) => state?.watchList?.watchList);
    console.log('listOfWatchList', listOfWatchList);
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        const zonk = Object.values(listOfWatchList.map((z) => z.id));
        setLikes((likes) => [
            // ...likes,
            ...zonk
        ]);
    }, [listOfWatchList]);
    const AddingToWatchList = (item, index) => {
        dispatch(
            AddToWatchList({
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

    const oldPrice = props.price - props.price * (-props.discountPercentage / 100);
    return (
        <>
            <div className={styles.slideContainer}>
                <div style={styles.imageblock} style={{ position: 'relative' }}>
                    <Link href={`/movie/${props.id}`}>
                        <img src={props.thumbnail} width="180" height="180px" alt={props.title} />
                    </Link>
                    {addButton}
                </div>
                <div className={styles.box}>
                    <div style={{ display: 'flex', flexDirection: 'row', float: 'left', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Rating name="read-only" value={1} max={1} readOnly />
                            <p>{props.rating}</p>
                        </div>
                        <div style={{ marginLeft: '30px' }}>
                            <IconContext.Provider value={{ color: 'blue', size: '25px' }}>
                                <div className="fav" onClick={() => AddingToWatchList(props, props.id)}>
                                    <AiOutlineStar />
                                </div>
                            </IconContext.Provider>{' '}
                        </div>
                    </div>
                    <div>
                        <Link href={`/movie/${props.id}`}>
                            <h3>{props.title}</h3>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {' '}
                        <div className="fav" onClick={() => FavHanlder(props, props.id)}>
                            <BsFillBasketFill />{' '}
                        </div>
                        <div onClick={() => FavHanlder(props, props.id)}>Add to card</div>
                    </div>
                    <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <h4 className={styles.productPrice}>
                            {props.price} <del className={styles.productOldPrice}>{oldPrice.toFixed()}</del>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SlideSchema;
