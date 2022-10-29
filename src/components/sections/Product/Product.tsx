import React, {useState, useEffect} from "react";
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { useGetProductsQuery } from "../../../store/reducers/itemSlice";
import uuid  from "react-uuid";
import style from "./Product.module.scss"
import { FaRegEye } from 'react-icons/fa';
import { MdFavoriteBorder, MdFavorite, MdOutlineCompareArrows } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Rating } from '@mui/material';
import { addToCart } from "../../../store/reducers/cartSlice";
import { AddToWatchList } from "../../../store/reducers/watchListSlice";
import { useSelector, useDispatch } from "react-redux";


const Product: React.FC = () =>{

    const {
        data, error, isLoading
      }  = useGetProductsQuery();
   const     products = data?.products;


   const dispatch = useDispatch();



   const FavHanlder = (item, index) => {
   
    dispatch(
        addToCart({
         amount: 1,   
        id: item.id,
        img: item.poster_path,
        title: item.title,
        desc: item.vdescription,
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
console.log("listOfWatchList", listOfWatchList)
  const [likes, setLikes] = useState([]);

  useEffect(() => {
  const zonk =  Object.values(listOfWatchList.map(z => z.id))
  setLikes(likes=>([
    // ...likes,
    ...zonk]
  ))
  },
    [listOfWatchList])
  const AddingToWatchList = (item, index) => {
   
    dispatch(
        AddToWatchList({
        id: item.id,
        img: item.poster_path,
        title: item.title,
        desc: item.vdescription,
        price: item.price,
        discountPercentage: item.discountPercentage,
        rating: item.rating,
        stock: item.stock,
        brand: item.brand,
        category: item.category
      })
      
    );
  };


    return(
<>
<div className={style.container}>
										{products?.slice(0,4).map((product, index) => {

var oldPrice =  (product.price - (product.price * (-product.discountPercentage/100)));


                                            return(
<React.Fragment key={uuid()}>
<div className={style.product}>
									<div className={style.productImg}>
                                            <img src={product.thumbnail} alt=""/>
												<div className={style.productLabel}>
													<span className={style.new}>{product.discountPercentage}
</span>
												</div>
											</div>
											<div className={style.productBody}>
												<p className={style.productCategory}>{product.category}</p>
												<h3 className={style.productName}><a href="#">{product.title}</a></h3>
												<h4 className={style.productPrice}>{product.price} <del className={style.productOldPrice}>{(oldPrice.toFixed())}</del></h4>
												<div className={style.productRating}>
													{/* <i className={style.faStar}></i>
													<i className={style.faStar}></i>
													<i className={style.faStar}></i>
													<i className={style.faStar}></i>
													<i className={style.faStar}></i> */}
                                                     <Rating
  name="simple-controlled"
  size="large"
  read-only
  style={{borderColor: "white", color: "red", size: "20px", marginTop: "-10px"}}
  value={product.rating}
  max={5}

/>
												</div>
												<div className={style.productBtns}>

												 <button className={style.addToWishlist} onClick={() => AddingToWatchList(product, index)}>
                                                    {/* <i className={ `${style.faGeartO}`}></i> */}
                                                    {likes.includes(product.id) ?  <MdFavorite/> : <MdFavoriteBorder/>}
                                                    <span className={style.tooltipp} >add to wishlist</span></button>
													<button className={style.addToCompare}>
                                                        {/* <i className={ `${style.faExchange}`}></i> */}
                                                        <MdOutlineCompareArrows/>
                                                        <span className={style.tooltipp}>add to compare</span></button>
													<button className={style.quickView}>
                                                        <FaRegEye/>
                                                        {/* <i className={ `${style.faEye}`}></i> */}
                                                        <span className={style.tooltipp}>quick view</span></button> 
												</div>
											</div>
											<div className={style.addToCart}> 
												<button className={style.addToCartBtn} onClick={() => FavHanlder(product, index)}><i className={ `${style.faShoppingCart}`}></i> add to cart</button>
											</div>
										</div>

</React.Fragment>

                                            )})}

                                            </div>
                                        </>
    )}

    export default Product; 