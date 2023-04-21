// import Link from "next/link";
import { Link } from "react-router-dom";
// import footertranslator from "../translation/footerTranslator";
import Img from '../assets/logo1.png'
import './footer.css'
function Footer() {
  return (
    <>
      {/* <footer class="footer-section">
        <div class="container">
            
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                            <img src={Img} style={{height: "60px", width: "200px"}} />
                            </div>
                            <div class="footer-text">
                                <p>We are a Ecommerce website, selling all the stuff that you need. You can find everything here.
                                  Also subscribe to get update on our latest products.
                                </p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container1">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> */}
     <footer
        className=""
        id="footer"
        style={{ backgroundImage: "url(images/background/bg10.png)" }}
      >
        <div className="footer-top">
          <div className="container">
            <div
              className="footer-info wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div className="row align-items-center">
                <div className="col-xl-2 col-md-5">
                  <div className="footer-logo">
                    <a href="/">
                    <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_700_1108)">
                    <path d="M14.9789 25.0208V27.6936H8.82588V40.0004H6.15302V27.6936H0V25.0208H14.9789Z" fill="#FFFFFF"/>
                    <path d="M27.931 29.0576V30.446H37.5694V33.1145H27.931V35.9447C27.9308 36.3091 28.0748 36.6587 28.3316 36.9172C28.5884 37.1758 28.9371 37.3221 29.3015 37.3243H40.2394V39.9928H29.3019C27.0683 39.9928 25.2617 38.177 25.2617 35.9431V29.0529C25.2621 27.9812 25.6878 26.9535 26.4453 26.1954C27.2028 25.4373 28.2302 25.0108 29.3019 25.0095H40.2398V27.678H29.3019C28.9375 27.6802 28.5887 27.8265 28.3319 28.0851C28.075 28.3436 27.9309 28.6932 27.931 29.0576Z" fill="#FFFFFF"/>
                    <path d="M51.8019 32.502C51.803 33.7809 52.3115 35.0072 53.2159 35.9116C54.1202 36.8159 55.3465 37.3245 56.6255 37.3255H64.1191V39.994H56.6255C52.4869 39.994 49.1318 36.6389 49.1318 32.5004C49.1318 28.3618 52.4869 25.0095 56.6255 25.0095H64.1191V27.678H56.6255C55.3464 27.679 54.1201 28.1876 53.2157 29.0921C52.3113 29.9965 51.8029 31.2229 51.8019 32.502Z" fill="#FFFFFF"/>
                    <path d="M89.3727 25.0119V39.9908H86.7002V33.1169H77.0662V39.9848H74.3938V25.0095H77.0662V30.4464H86.7002V25.0119H89.3727Z" fill="#FFFFFF"/>
                    <path d="M114.643 25.0095V39.9968L111.964 37.9317L102.334 30.5094V39.9968H99.6555V25.0613L102.334 27.126L111.964 34.5483V25.0095H114.643Z" fill="#FFFFFF"/>
                    <path d="M139.382 32.502C139.382 36.6385 136.029 39.9916 131.895 39.9916C127.76 39.9916 124.407 36.6385 124.407 32.502C124.407 28.3655 127.76 25.012 131.895 25.012C136.03 25.012 139.382 28.3655 139.382 32.502ZM136.714 32.502C136.714 31.5489 136.431 30.6171 135.902 29.8246C135.372 29.0321 134.619 28.4144 133.739 28.0497C132.858 27.6849 131.889 27.5895 130.954 27.7754C130.02 27.9614 129.161 28.4204 128.487 29.0943C127.813 29.7683 127.354 30.627 127.168 31.5618C126.982 32.4967 127.078 33.4656 127.442 34.3462C127.807 35.2268 128.425 35.9795 129.217 36.509C130.01 37.0385 130.941 37.3212 131.895 37.3212C133.172 37.3192 134.397 36.8107 135.3 35.9071C136.203 35.0036 136.711 33.7788 136.713 32.5012L136.714 32.502Z" fill="#FFFFFF"/>
                    <path d="M11.9532 4.19109V4.11143C11.9511 3.74164 11.8026 3.38772 11.5403 3.12709C11.2779 2.86646 10.9231 2.72032 10.5532 2.72064H4.3839C4.01507 2.72075 3.66137 2.86731 3.40057 3.12811C3.13977 3.38891 2.99321 3.74261 2.9931 4.11143V4.19109C2.99321 4.55996 3.13976 4.91369 3.40055 5.17455C3.66134 5.43542 4.01503 5.58207 4.3839 5.58228H9.84909C10.5179 5.58094 11.1795 5.72016 11.791 5.9909C12.4025 6.26164 12.9504 6.65787 13.399 7.15389C13.4664 7.21659 13.527 7.28628 13.5798 7.36179C14.2808 8.21785 14.6637 9.29023 14.6635 10.3967C14.6635 13.052 12.5048 15.2019 9.84909 15.2019H5.08845C4.45735 15.2022 3.83238 15.0781 3.24926 14.8367C2.66614 14.5953 2.13631 14.2413 1.69005 13.7951C1.24379 13.3488 0.889851 12.819 0.648458 12.2359C0.407065 11.6528 0.282948 11.0278 0.28321 10.3967H2.99151C2.99183 10.9523 3.21269 11.4851 3.60558 11.878C3.99846 12.2709 4.53124 12.4917 5.08686 12.492H9.84909C10.1267 12.4959 10.4023 12.4445 10.6599 12.3409C10.9175 12.2373 11.152 12.0835 11.3496 11.8886C11.5473 11.6936 11.7043 11.4613 11.8114 11.2052C11.9186 10.949 11.9737 10.6741 11.9737 10.3965C11.9737 10.1188 11.9186 9.84395 11.8114 9.58781C11.7043 9.33166 11.5473 9.09936 11.3496 8.90439C11.152 8.70942 10.9175 8.55567 10.6599 8.45208C10.4023 8.34848 10.1267 8.29711 9.84909 8.30093H4.3839C3.32451 8.30617 2.30565 7.89411 1.54775 7.15389C1.34636 6.96429 1.16754 6.75206 1.01485 6.52142C0.537186 5.83834 0.281706 5.02462 0.28321 4.19109V4.11143C0.28321 1.84443 2.1153 0.00158691 4.38549 0.00158691H10.5548C11.6446 0.00243077 12.6894 0.435703 13.46 1.20627C14.2306 1.97683 14.6638 3.02169 14.6647 4.11143V4.19109H11.9532Z" fill="#FFFFFF"/>
                    <path d="M40.307 0V7.60714C40.307 11.8074 36.9018 15.2143 32.6999 15.2143C28.4981 15.2143 25.0928 11.809 25.0928 7.60714V0H27.8011V7.60714C27.8011 8.90554 28.3169 10.1508 29.235 11.0689C30.1531 11.987 31.3983 12.5028 32.6967 12.5028C33.9951 12.5028 35.2404 11.987 36.1585 11.0689C37.0766 10.1508 37.5924 8.90554 37.5924 7.60714V0H40.307Z" fill="#FFFFFF"/>
                    <path d="M65.9376 0.0126953V2.72498H59.6922V15.2154H56.9799V2.72498H50.7349V0.0126953H65.9376Z" fill="#FFFFFF"/>
                    <path d="M88.6756 12.4912L90.0573 15.2103H87.0136L85.6224 12.4912L84.1699 9.64076L84.105 9.52127C83.8642 9.12364 83.5248 8.79494 83.1197 8.56704C82.7146 8.33915 82.2574 8.21977 81.7926 8.22049H79.0843V15.2119H76.376V6.70304e-06H85.9721C86.5108 -0.000969565 87.0443 0.104705 87.542 0.310939C88.0396 0.517173 88.4915 0.819881 88.8716 1.20161C89.3403 1.6714 89.6883 2.24757 89.8862 2.88098C90.084 3.5144 90.1257 4.18626 90.0077 4.83927C89.8897 5.49228 89.6155 6.10707 89.2085 6.63119C88.8015 7.15532 88.2738 7.57324 87.6704 7.8493C87.2968 8.02442 86.8971 8.13743 86.4871 8.18385H86.4835L88.6756 12.4912ZM85.9693 5.5102C86.1664 5.51355 86.3614 5.47015 86.5385 5.38355C86.7845 5.27392 86.9932 5.09501 87.1392 4.86867C87.2852 4.64234 87.3621 4.37838 87.3605 4.10905C87.3605 3.6124 87.0984 3.26908 86.9447 3.10659C86.6848 2.85043 86.3342 2.70729 85.9693 2.70831H79.0867V5.50861L85.9693 5.5102Z" fill="#FFFFFF"/>
                    <path d="M115.122 15.2119H112.078L110.687 12.4929L107.372 5.97983L104.057 12.4921L102.666 15.2119H99.6213L101.003 12.4929L107.371 0.000854492L113.74 12.4929L115.122 15.2119Z" fill="#FFFFFF"/>
                    <path d="M139.326 15.2119H136.282L134.891 12.4929L131.576 5.98062L128.261 12.4929L126.87 15.2119H123.826L125.208 12.4929L131.576 0.000854492L137.944 12.4929L139.326 15.2119Z" fill="#FFFFFF"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_700_1108">
                    <rect width="139.383" height="40" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </a>
                  </div>
                  {/* <a style={{ color: "white" }} href="http://sutraa.com">
                    Powered by Sutraa
                  </a> */}
                </div>
                <div className="col-xl-3 col-md-5 col-sm-5">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <Link href="mailto: info@sutraatechno.com">
                        <a className="icon-cell">
                          <i className="flaticon-email"></i>
                        </a>
                      </Link>
                    </div>
                    <div className="icon-content text-sm sm:text-xs">
                      <p>
                      India: +91 991-171-7877
                        <br />
                        Chile: +56 9-3788-3852 / +56 9-5229-9483
                        <br />

                        info@sutraatechno.com

                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-5 col-sm-5">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <Link href="https://www.google.com/maps/search/Tower+%E2%80%93+C,+25th+Floor,+Bhutani+Alphathum,+D+Block,+Sector+%E2%80%93+90,+Noida,+Uttar+Pradesh+201301+/@28.5133906,77.4083131,17.09z">
                        <a className="icon-cell">
                          <i className="flaticon-location"></i>
                        </a>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <p>India Address: Tower – C, 25th Floor, Bhutani Alphathum, D Block, Sector – 90, Noida, Uttar Pradesh <br/> 201301</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-5 col-sm-5">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <Link href="https://www.google.com/maps/place/Av.+Nueva+Providencia+1881+1809,+7500000+Providencia,+Regi%C3%B3n+Metropolitana,+Chile/@-33.4257674,-70.6162057,17z/data=!3m1!4b1!4m6!3m5!1s0x9662cf64432fc7f5:0xe326692498533afd!8m2!3d-33.4257719!4d-70.614017!16s%2Fg%2F11s9xpbdg1">
                        <a className="icon-cell">
                          <i className="flaticon-location"></i>
                        </a>
                      </Link>
                    </div>
                    <div className="icon-content">
                      <p>Chile Address: AV NUEVA PROVIDENCIA 1881 1809 PROVIDENCIA. Santiago de Chile, Chile.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <h5 className="footer-title">
                   AboutUs
                  </h5>
                  <p>AboutUsparagraph</p>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fa fa-facebook"
                          href="https://www.facebook.com/sutraatech"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-instagram"
                          href="https://www.instagram.com/sutraa_techno/"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-twitter"
                          href="https://twitter.com/SutraaTechno"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-linkedin"
                          href="https://www.linkedin.com/company/sutraatechno"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">
                   Ourlinks
                  </h5>
                  <ul>
                    <li>
                      <Link href="/">
                        <a> Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions">
                        <a>Solutions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        <a>ContactUs</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/careers">
                        <a>Careers</a>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/blog">
                        <a>Blog</a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">
                  OurServices
                  </h5>
                  <ul>
                    <li>
                      <Link href="/software-development">
                        <a>SoftwareDevelopment</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ui-ux-development">
                        <a>UIUXDevelopment</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/development-outsourcing">
                        <a>
                         SoftwareDevelopmentOutsourcing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/it-support">
                        <a>ITSupport</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Ourlinks</h5>
                  <ul>
                    <li>
                      <Link href="/privacy-policy">
                        <a>PrivacyPolicy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div
          className="footer-bottom wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <span className="copyright-text">
                  copyright
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
