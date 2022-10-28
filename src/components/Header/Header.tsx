import React, {useState} from "react";
import Navigation from "./Navigation/Navigation"
import HeroSlider from "./HeroSlider/HeroSlider"

const Header: React.FC = ({product}) => {

return (
<>
<div style={{display: "grid", gridTemplateColumns: "250px, 1fr"}}>
 <Navigation/>
   <HeroSlider product={product}

   />
</div>

</>
)
}

export default Header