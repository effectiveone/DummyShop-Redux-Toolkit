import { randomUUID } from "crypto";
import React, {useState} from "react";
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { useGetCategoriesQuery } from "../../../store/reducers/itemSlice";
import uuid from "react-uuid"
import style from "./Navigation.module.scss";

const Navigation: React.FC = () => {
    const [numberOfCategory, setNumberOfCategory] = useState(0)
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
<p>{genres}</p>
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