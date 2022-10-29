import { randomUUID } from "crypto";
import React, {useState} from "react";
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { useGetCategoriesQuery } from "../../../store/reducers/itemSlice";
import uuid from "react-uuid"
import style from "./Navigation.module.scss";
import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';


const Navigation: React.FC = () => {

    const [numberOfCategory, setNumberOfCategory] = useState(0)

    const NumberItemsInCard = useSelector((state) => state.card);


    console.log("how many NumberItemsInCard", NumberItemsInCard.items.length)


    const dispatch = useAppDispatch();
const {
        data, error, isLoading
      }  = useGetCategoriesQuery();
      console.log("data", data)
    return (
<>
<div className={style.row}>

{data?.slice(numberOfCategory, (numberOfCategory + 8)).map((genres)=> (
<React.Fragment key={uuid()}>
    <div>
    <Link href={`/Categories/${genres}`}><p>{genres}</p></Link>
</div>
</React.Fragment>
))}
<button onClick={()=> setNumberOfCategory(numberOfCategory +1)} className={style.btnPlus}>+</button>

<button onClick={()=> setNumberOfCategory(numberOfCategory -1)} className={style.btnMinus}>-</button>

</div>

</>
    )
}

export default Navigation;