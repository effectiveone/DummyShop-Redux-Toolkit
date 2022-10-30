import React, {Fragment} from "react";
import style from "./Footer.module.scss"

const Footer: React.FC = () => {
    return (
<Fragment>
<footer className={style.footerContainer}>
    <div className={style.section}>
   
        <div className={style.container}>


         
                 <div className={style.row}>
                    <div className="footer">
                        <h3 className="footer-title">About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        <ul className="footer-links">
                            <li><a href="#"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
                            <li><a href="#"><i className="fa fa-phone"></i>+021-95-51-84</a></li>
                            <li><a href="#"><i className="fa fa-envelope-o"></i>email@email.com</a></li>
                        </ul>
                    </div>
                </div>

                 <div className={style.row}>
                    <div className="footer">
                        <h3 className="footer-title">Categories</h3>
                        <ul className="footer-links">
                            <li><a href="#">Hot deals</a></li>
                            <li><a href="#">Laptops</a></li>
                            <li><a href="#">Smartphones</a></li>
                            <li><a href="#">Cameras</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                    </div>
                </div>

                <div className={style.row}>
                    <div className="footer">
                        <h3 className="footer-title">Information</h3>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Orders and Returns</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                 <div className={style.row}>
                    <div className="footer">
                        <h3 className="footer-title">Information</h3>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Orders and Returns</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

    

            </div>
    </div>

    <div id="bottom-footer" className="section">
        <div style={{height: "40px", backgroundColor: "red"}}>
            <div className={style.container}>
                <div className="col-md-12 text-center">
           
            
                </div>
            </div>
        </div>
    </div>
</footer>
</Fragment>
    )
}
export default Footer