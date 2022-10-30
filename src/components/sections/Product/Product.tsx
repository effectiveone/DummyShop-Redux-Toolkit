
import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { MdFavorite, MdFavoriteBorder, MdOutlineCompareArrows } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';

import { addToCart } from '../../../store/reducers/cartSlice';
import { useGetProductsQuery } from '../../../store/reducers/itemSlice';
import { AddToWatchList } from '../../../store/reducers/watchListSlice';
import Arrows from '../../Arrows/Arrows';
import style from './Product.module.scss';

const Product: React.FC = () => {
    const [slideItem, setSlideItem] = useState(0);
    const incrementCountSlide = () => {
        setSlideItem(slideItem + 6);
    };
    const DecrementCountSlide = () => {
        setSlideItem(slideItem - 6);
    };

    const { data } = useGetProductsQuery();
    const products = data?.products;

    const dispatch = useDispatch();

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
    const listOfWatchList = useSelector((state) => state?.watchList?.watchList);
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
                thumbnail: item.thumbnail,
                description: item.description,
                title: item.title,
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
            {/* <div className={style.navigation>{categories?.map(category =>  (<p onClick={ setCat(category)}>{category}</p> )}</div> */}
            <div className={style.container}>
                {products?.slice(slideItem, slideItem + 4).map((product, index) => {
                    const oldPrice = product.price - product.price * (-product.discountPercentage / 100);

                    return (
                        <React.Fragment key={uuid()}>
                            <div className={style.product}>
                                <div className={style.productImg}>
                                    <img src={product.thumbnail} alt="" />
                                    <div className={style.productLabel}>
                                        <span className={style.new}>{product.discountPercentage}</span>
                                    </div>
                                </div>
                                <div className={style.productBody}>
                                    <p className={style.productCategory}>{product.category}</p>
                                    <h3 className={style.productName}>
                                        <a href="#">{product.title}</a>
                                    </h3>
                                    <h4 className={style.productPrice}>
                                        {product.price}{' '}
                                        <del className={style.productOldPrice}>{oldPrice.toFixed()}</del>
                                    </h4>
                                    <div className={style.productRating}>
                                        <Rating
                                            name="simple-controlled"
                                            size="large"
                                            read-only
                                            style={{
                                                borderColor: 'white',
                                                color: 'red',
                                                size: '20px',
                                                marginTop: '-10px'
                                            }}
                                            value={product.rating}
                                            max={5}
                                        />
                                    </div>
                                    <div className={style.productBtns}>
                                        <button
                                            className={style.addToWishlist}
                                            onClick={() => AddingToWatchList(product, index)}
                                        >
                                            {likes.includes(product.id) ? <MdFavorite /> : <MdFavoriteBorder />}
                                            <span className={style.tooltipp}>add to wishlist</span>
                                        </button>
                                        <button className={style.addToCompare}>
                                            <MdOutlineCompareArrows />
                                            <span className={style.tooltipp}>add to compare</span>
                                        </button>
                                        <button className={style.quickView}>
                                            <FaRegEye />
                                            <span className={style.tooltipp}>quick view</span>
                                        </button>
                                    </div>
                                </div>
                                <div className={style.addToCart}>
                                    <button
                                        data-testid="addToCardBTN"
                                        className={style.addToCartBtn}
                                        onClick={() => FavHanlder(product, index)}
                                    >
                                        <i className={`${style.faShoppingCart}`}></i> add to cart
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}

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
            </div>
        </>
    );
};

export default Product;
