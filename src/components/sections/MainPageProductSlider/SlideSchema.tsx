import styles from "./MainPageProductSlider.module.scss"
import { Rating } from '@mui/material';
import Link from 'next/link';
import { AiOutlinePlus, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import react, {useState, useEffect} from "react"
import { BsBookmarkPlusFill, BsFillBookmarkCheckFill, BsCheckLg } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';



const SlideSchema = (props: any) =>  {
   const [ranking, setRanking] = useState()

const addButton = (
  <div style={{position: "absolute", left: "9px", top: "0px"}}>
  <IconContext.Provider value={{ color: "3C3C3C", size: "50px", className: "iconClass",   }}>

  <div className="fav" >
     <BsFillBookmarkCheckFill/>
        </div>

</IconContext.Provider>



</div>
)



const [isOpen, setIsOpen]= useState<boolean>(false)
const handleModal = () => {
  setIsOpen(!isOpen)
}

const Pixels = (e) => {
  const px = e*3;
  return px + 'px'
}




const schemaModal = (<Modal
  // backgroundColor: "#1A1A1A"
  open={isOpen}
  onClose={handleModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  style={{display:'flex',alignItems:'center',justifyContent:'center'}}
>

       
      
               
  <Box style={{position: "relative", display: "flex", justifyContent: "center", backgroundColor: "#1A1A1A", height: "250px", width: "500px",  flexDirection: "column", alignItems: "center", color: "white"}}>
    
  <div style={{position: "absolute", top: `calc(-50px +10px ) }`}}>
                  <IconContext.Provider
      value={{ color: 'blue', size: "calc(100px +10px)" }}
    >
      <div className="fav" style={{position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <AiFillStar/> 
      <p style={{position: "absolute", color: "white", zIndex: "10", }}>{ranking ?? "?"}</p>
        </div>
        </IconContext.Provider>                  </div>
    
    <Typography id="modal-modal-title" variant="h6" component="h2">
   <h3 style={{color: "rgb(245,197,24)"}}> RATE THIS</h3>
    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <p style={{color: "white"}}>{props.title}</p>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Rating
  name="simple-controlled"
  size="large"
  style={{borderColor: "white", color: "blue", size: "20px"}}
  value={ranking}
  max={10}

/>

    </Typography>
    <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginTop: "20px"}}>
    <button style={{width: "240px", backgroundColor: "rgb(245,197,24)"}}>Rate</button>
    </Typography>
  </Box>
</Modal>)


    return (
<>
<div className={styles.slideContainer}>
  <div style={styles.imageblock} style={{position: "relative"}}>
<Link href={`/movie/${props.id}`}>
  <img src={props.thumbnail}
width="180"
height="270px"
/></Link>
{addButton}
</div>
<div className={styles.box}>
<div style={{display: "flex", flexDirection: "row", float: "left", alignItems: "center"}}>
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}><Rating name="read-only" value={1} max={1} readOnly /><p>{props.rating}</p></div>
    <div style={{marginLeft: "30px"}}>
                  <IconContext.Provider
      value={{ color: 'blue', size: '25px' }}
    >
      <div className="fav" onClick={handleModal}>
      <AiOutlineStar/> 
        </div>
        </IconContext.Provider>                  </div>
        {schemaModal}
</div>
<div><Link href={`/movie/${props.id}`}><h3>{props.title}</h3></Link></div>
<div style={{display: "flex", flexDirection: "row"}}> <div className="fav" >
    <BsCheckLg/> </div>
<div>Trailer</div>
</div>
</div>
</div>
</>
)
}

export default SlideSchema






