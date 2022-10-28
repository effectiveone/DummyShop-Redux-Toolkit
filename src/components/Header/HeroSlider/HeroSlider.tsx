import React, {useState} from "react";
import style from "./HeroSlider.module.scss";
import Arrows from "../../Arrows/Arrows"
const HeroSlider: React.FC = ({product}) => {
    const [numSlider, setNumSlider] = useState(0)
    const DecrementCount = () => {
        setNumSlider(numSlider - 1)
    }
    
    const incrementCount = () => {
        setNumSlider(numSlider + 1)
    }


    console.log("what is under product", product)



  
    return (


<>
<div className={style.containerDiv}  >

{product?.map((pro) => (

<div className={style.slider} style={{ backgroundImage: `url(${pro.images[numSlider]})`}}>
<div className={style.description}>
<h2>{pro.title}</h2>
<span>{pro.rating}</span>
<span>{pro.price}</span></div>
<div className={style.discount}><span>{pro.discountPercentage.toFixed(0)}%</span></div>
</div>

))}

<div className={style.leftArrow}>
            <Arrows
              direction={"left"}
              opacity={1}
              handleClick={DecrementCount}
            />
          </div>
          <div className={style.rightArrow}>
            <Arrows
              direction={"right"}
              opacity={1}
              handleClick={incrementCount}
            />
          </div>
    </div>
</>
    )
}

export default HeroSlider