import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-link-div">
                        <h4>Watch it</h4>
                        <a href='#'>
                            <p>Why Watch IT Plus</p>
                        </a>
                        <a href='#'>
                            <p>Hot Offers</p>
                        </a>
                        <a href='/signup' target='-Blank'>
                            <p>Wanna partner with us?</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>SUPPORT</h4>
                        <a href='#'>
                            <p>Contact Support</p>
                        </a>
                        <a href='#'>
                            <p>Help Center</p>
                        </a>
                        <a href='#'>
                            <p>Accessibility</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>GET THE APPS</h4>
                        <a href='#'>
                            <p>IOS</p>
                        </a>
                        <a href='#'>
                            <p>Android</p>
                        </a>
                        <a href='#'>
                            <p>Amazon Fire</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>GET INVOLVED</h4>
                        <a href='#'>
                            <p>Contribution Bible</p>
                        </a>
                        <a href='#'>
                            <p>Add New Movie</p>
                        </a>
                        <a href='#'>
                            <p>Add New TV Show</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4 className='h4-media'>Media</h4>
                        <div className="socialmedia">
                            <div className="main-media">
                                <div className="up">
                                    <button className="card1-media">
                                        <a href='https://www.linkedin.com/in/yousif-alammar-190346282/' target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="30px" height="30px" fillRule="nonzero" className="linkdein">
                                                <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                                    <g transform="scale(8,8)">
                                                        <path fill="#0077B5" d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </button>

                                    <button className="card2-media">
                                        <a href='https://www.instagram.com/joseph.muh/?next=%2F' target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="45px" height="40px" className="instagram">
                                                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                                            </svg>
                                        </a>
                                    </button>
                                </div>
                                <div className="down">
                                    <button className="card3-media" >
                                        <a href='https://github.com/Yousif399' target='_blank'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" className="github">
                                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                        </svg></a>
                                    </button>
                                    <button className="card4-media">
                                        <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="discord">
                                            <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <div className="sb__footer-below">
                    <div className="sb__footer-copyrights">
                        <p>@{new Date().getFullYear()} Watch IT. All right reserved</p>
                    </div>

                    <div className="sb__footer-below-links">
                        <a href='https://www.shopify.com/tools/policy-generator/terms-and-conditions?bucket=branding_generator&term=terms%20and%20conditions%20generator&adid=565856831450&campaignid=15436644433&gclid=CjwKCAjw_aemBhBLEiwAT98FMkmmxaoUpxqJMnxywSYtyExtkQ5eAxa2NHnGIbQ9WJIMQWUjRgqWZhoChxsQAvD_BwE' target='-Blank'><div>Terms & Conditions</div></a>&nbsp;&nbsp;
                        <a href='https://legal.hubspot.com/privacy-policy?hubs_content=blog.hubspot.com/website/website-footer&hubs_content-cta=Privacy%20Policy&_ga=2.261033803.750802818.1690998126-988549604.1690998126&_gl=1*143it23*_ga*OTg4NTQ5NjA0LjE2OTA5OTgxMjY.*_ga_LXTM6CQ0XK*MTY5MDk5ODEyNy4xLjAuMTY5MDk5ODEyNy42MC4wLjA.' target='-Blank'><div>Privacy</div></a>&nbsp;&nbsp;
                        <a href='https://legal.hubspot.com/security?hubs_content=blog.hubspot.com/website/website-footer&hubs_content-cta=Security&_ga=2.261033803.750802818.1690998126-988549604.1690998126&_gl=1*10lb4st*_ga*OTg4NTQ5NjA0LjE2OTA5OTgxMjY.*_ga_LXTM6CQ0XK*MTY5MDk5ODE1NC4xLjAuMTY5MDk5ODE1NC42MC4wLjA.' target='-Blank'><div>Security</div></a>&nbsp;&nbsp;
                        <a href='#'><div>Cookie Declaration</div></a>




                    </div>
                </div>

            </div>
        </div>

    )
}

export default Footer




