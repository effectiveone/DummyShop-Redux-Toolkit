import React, {useState} from "react"
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { useGetProductsQuery } from "../../../store/reducers/itemSlice";
import Arrows from "../../Arrows/Arrows"
import styles from "./MainPageProductSlider.module.scss";
import SlideSchema from "./SlideSchema"
import uuid  from "react-uuid";

const MainPageProductSlider: React.FC = () => {
    const dispatch = useAppDispatch();
    // const count = useAppSelector(selectCount);

    const {
        data, error, isLoading
      }  = useGetProductsQuery();
   console.log("datadatadata", data)

      const [slideItem, setSlideItem] = useState(0)
      const incrementCountSlide = () => {
        
        setSlideItem( slideItem + 6);
      };
      const DecrementCountSlide = () => {
        setSlideItem(slideItem - 6 );
        };
   const     slides = data?.products   ;


const PropsOfShooping = [
  {name: "Quality Product"},
  {name: "Free Shipping"},
  {name: "14-Day Return"},
{ name: "24/7 Support"}]



 return (
<>
 <div
   className={styles.border}
    >
{PropsOfShooping.map((Props) => (
  <div key={uuid()} className={styles.props}>
<p>{Props.name}</p>
    </div>
))}

</div>

             {slides && (<> 
                <div style={{display: "grid", gridTemplateColumns: "repeat(6, 1fr)", position: "relative", paddingBottom: "50px"}}>
                {slides.slice(slideItem, (slideItem +6)).map((slide) => {
                    return (
                      <React.Fragment key={uuid()}>
                        <SlideSchema
                        {...slide}
              
               /> 
                      {slideItem > 0 && (    <div style={{ position: "absolute", top: "30%", left: "-2%" }}>
            <Arrows
              direction={"left"}
              opacity={1}
              handleClick={DecrementCountSlide}
            />
          </div>)}
  {slideItem < 5 &&(        <div  style={{ position: "absolute", top: "30%", right: "0%" }}>
            <Arrows
              direction={"right"}
              opacity={1}
              handleClick={incrementCountSlide}
            />
          </div>)}
                        </React.Fragment>
                    )
            
                })}
                </div>
                </>)}

</>
    )
}

export default MainPageProductSlider