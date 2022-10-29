import React, {useState, useEffect} from "react";
  import style from "./Cart.module.scss"
  import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
  import { IconContext } from "react-icons";
  import { GrAdd } from "react-icons/gr";
  import { AiOutlineMinus } from "react-icons/ai";
  import { RiDeleteBinLine } from "react-icons/ri";
  import {   remove,
    increase,
    decrease,
    getCartTotal } from "../../store/reducers/cartSlice";
  import uuid from "react-uuid"
  import Link from "next/link"
  
  function ProductList({ products }) {
    const dispatch = useAppDispatch();


    const AddQuantity = (item) => {
      dispatch(
        increase({
          id: item
        }
 )
      )

     }

     const DecreaseQuantity = (item) => {
      dispatch(
        decrease({
          id: item
        })
      )
      console.log("co  mam w DecreaseQuantity", item)

     }

     const RemoveItem = (item) => {
      dispatch(
        remove({
          id: item
        })
      )
     }


    return (
      <section className={style.container}>
           <div>
          {products.map((product, index) => {
            return (
              <>
           <div className={style.image}>
                      <img src={product.thumbnail} alt={product.title} width="200" height="150"/>
       </div>
       <div className={style.productInfo}>
                      <h2>{product.title}</h2>
              
                    <div className={style.description}>{product.description}</div>
                    <div className={style.price}>{formatCurrency(product.price)}</div>
           </div>      
            <div className={style.amountOfProduct} >
            <IconContext.Provider value={{ color: "blue", size: "30px", className: "global-class-name" }}>
  <div onClick={()=> AddQuantity(product.id)}>
    <   GrAdd />
  </div>
</IconContext.Provider>
                   
                   <div style={{width: "50px", height: "50px", alignItems: "center ", justifyContent: "center", display: "flex", border: "1px solid black"}}>
                   {product.amount}</div>

                      <IconContext.Provider value={{ size: "30px", className: "global-class-name" }}>
  <div onClick={()=> DecreaseQuantity(product.id)}>
    <   AiOutlineMinus />
  </div> 
</IconContext.Provider>
                    </div>

<div className={style.RiDeleteBinLine} onClick={()=> RemoveItem(product.id)}>
                    <IconContext.Provider value={{ color: "red", size: "30px", className: "global-class-name" }}>
  <div>
    <   RiDeleteBinLine />
  </div>
</IconContext.Provider>
</div>
             
  </>
  
            );
          })}</div>

      </section>
    );
  }
  
  function Summary({

  }) {

    const dispatch = useAppDispatch();

    const {items,
      totalAmount} = useAppSelector((state) => state?.card)

    useEffect(() => {
      dispatch(getCartTotal());
    }, [items]);






    return (

<section className={style.summary}>
<div className={style.leftSummary}>
<span>Sub Total: {totalAmount}</span>
<span>Plus VAT: @ 20%</span>

<Link href={`/`}><button>Continue shopping</button></Link>

  </div>
  <div className={style.rightSummary}>
    <span>TOTAL: {totalAmount*1.2}</span>
<button>Checkout</button>
    </div>
  </section>

    );
  }
  


  
  function Cart() {
    const shoppingList = useAppSelector((state) => state?.card?.items);



  
    return (
      <div>
  
        {shoppingList.length > 0 ? (
          <div>
            <ProductList
              products={shoppingList}
       
            />
  
            <Summary/>
          </div>
        ) : (
          <div className={style.emptyProduct}>
            <h3>There are no products in your cart.</h3>
            <button onClick={() => setProducts(PRODUCTS)}>Shopping now</button>
          </div>
        )}
      </div>
    );
  }
  
  
  function formatCurrency(value) {
      return Number(value).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        });
    }

    export default Cart;




   