import React, { useEffect, useState } from "react";
import  {useGetSearchProductMutation}  from "../../store/reducers/itemSlice";
import { Slider } from '@mui/material';
import { useRouter } from 'next/router'
import SlideSchema from "../../components/sections/MainPageProductSlider/SlideSchema"
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { Container } from '@mui/material';
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Header/Navbar/Navbar"

const Search: React.FC = () => {
    const [downAndUp, setDownAndUp] = useState(true)
    const [sortMethod, setSortMethod] = useState("title")
  const handleChange = (e) => {
    setSortMethod(e.target.value)
  }
    const router = useRouter()
    const [selectedCategory, setSelectedCategory] = useState()
    const { slug } = router.query
    const [getSearchProduct,  { isLoading, data }] = useGetSearchProductMutation()

    useEffect(() => {
     
        
        getSearchProduct( slug ).unwrap().then(fulfilled => {setSelectedCategory(fulfilled)});
        // setSelectedCategory(data)
    

    }, [slug]);

    console.log("sUnderelectedCategory", selectedCategory)


              const [minPrice, setMinPrice] = useState<Number>(0);
    const [maxPrice, setMaxPrice ]= useState<Number>(2000);

const sorting = (
    <div style={{paddingRight: "20px"}}>
    <select onChange={handleChange}>
      <option value="title">Alphabetical</option>
      <option value="price">Price</option>
      <option value="rating">Rank</option>
    </select>
    </div>
)


const downUp = (
    <>
    
    <div onClick={ () => setDownAndUp(!downAndUp)} style={{paddingRight: "20px"}}>
    {downAndUp ? (<><AiOutlineArrowDown/></>) : (<><AiOutlineArrowUp/></>) }
    
    
    </div>
     </>
    )

    function searchMethodFunc (a, b)   {
        if(downAndUp === true) {
        
          if (a[`${sortMethod}`] > b[`${sortMethod}`]) return -1;
          if (a[`${sortMethod}`] < b[`${sortMethod}`]) return 1; 
        
        }
        else { 
        
          if (b[`${sortMethod}`] > a[`${sortMethod}`]) return -1;
          if (b[`${sortMethod}`] < a[`${sortMethod}`]) return 1;
        }
         
         }


if(isLoading){return "Loading...."}
         

return (<>


<Navbar/>
<Container maxWidth="xl" style={{marginBottom: "950px"}}>
<div style={{backgroundColor: "yellow", width: "100%", height: "50px", position: "relative"}}>
    <div style={{position: "absolute",
     left: "50%",
      display: "flex",
       flexDirection: "row",
       gap: "50px",
       marginTop: "10px",
        alignItems: "center" }}><p>Sort By</p> {sorting} {downUp}</div>
</div>
 <div style={{display: "grid",
  gridTemplateColumns: "400px, 1fr",
   position: "relative",
   marginRight: "-100px",
   paddingTop: "50px"
   }}>
{selectedCategory && (<div style={{display: "grid",  gridTemplateColumns: "repeat(3, 1fr)", gap: "100px", gridColumn: "2",  }}>

    {selectedCategory?.products?.filter(p => 
    (
p.price > `${minPrice}` && p.price < `${maxPrice}`
    )).sort(searchMethodFunc).map(cat=> 
        <SlideSchema
        {...cat}
        />
        )}
</div>    )}
<div style={{ 
    position: "absolute",
    top: "0px",
     width: "400px", 
height: "1000px",
gridColumn: 1, 
display: "flex",
 flexDirection: "column", 
 alignItems: "center", 
 backgroundColor: "yellow", 
 padding: "0px 20px 0px 20px"}}>
<h3 style={{paddingBottom: "30px", paddingTop: "20px", fontSize: "24px", marginTop: "-60px"}}>Category</h3>
<p style={{paddingBottom: "30px", paddingTop: "20px"}}>MIN</p>

<Slider
        getAriaLabel={() => 'Temperature range'}
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value) }
        valueLabelDisplay="auto"
        max={2000}
      />
     <p style={{paddingBottom: "30px", paddingTop: "20px"}}> MAX</p>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value) }
        valueLabelDisplay="auto"
        max={2000}
      />
    </div>



    </div> 
</Container>
<Footer/>
    </>)}

    export default Search