import React, {useState} from "react";
import background from "../../../assets/images/hotdeal.png";
import styles from "./HotDeal.module.scss"
const HotDeal:React.FC = () =>{

    console.log("background", background)
    return(
<div className={styles.container} style={{backgroundImage: `url(${background.src})`}}>
<div className={styles.grid}>
{Time.map((tim) => (
    <div className={styles.column}>
     <p>{tim.number}</p>
      <p> {tim.name}</p> 
    </div>
))}
</div>
<h3>HOT DEAL THIS WEEK</h3>
<span>NEW COLLECTION UP TO 50% OFF</span>

<button className={styles.btn}>
    SHOP NOW
</button>
</div>
    )
}

export default HotDeal;

const Time = [{
    name: "days",
    number: 2
},
{
    name: "hours",
    number: 12
},
{
    name: "minutes",
    number: 21
},
{
    name: "seconds",
    number: 2
}
]