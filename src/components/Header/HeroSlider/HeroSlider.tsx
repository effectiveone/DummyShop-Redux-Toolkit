import React, {useState} from "react";
import style from "./HeroSlider.module.scss";
import Arrows from "../../Arrows/Arrows"
const HeroSlider: React.FC = ({product}) => {
    const [numSlider, setNumSlider] = useState(0)
    const DecrementCount = () => {
      numSlider === 0 ? setNumSlider(product[0].images.length -1) :
        setNumSlider(numSlider - 1)
    }
    
    const incrementCount = () => {
      numSlider === (product[0].images.length - 1) ? setNumSlider(0) :
        setNumSlider(numSlider + 1)
    }

   


  
    return (


<>
<div className={style.containerDiv}  >

{product?.map((pro) => (

<div className={style.slider} style={{ backgroundImage: `url(${pro.images[numSlider]})`}}>
<div className={style.description}>
<h2>{pro.title}</h2>
<p style={{color: "red"}}>{numSlider.length}</p>
<span>{pro.rating}</span>
<span>{pro.price}</span></div>
<div className={style.discount}><span>{pro.discountPercentage.toFixed(0)}%</span></div>
<button>add to card</button>
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