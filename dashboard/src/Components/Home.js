import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop.module.css";
import Example from "./Popadmin";
import { HashLink } from 'react-router-hash-link';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Button from "react-bootstrap/Button";
import { truncatedNormal } from "@tensorflow/tfjs";

const Home = () => {
  
  const navigate = useNavigate();
  // const handleScroll = (id) => {
  //   let elem = document.querySelector(id);
  //   // console.log(elem);
  //   scroll.scrollTo(elem, {
  //     offset: "-100",
  //     duration: "2000",
  //     easing: [0.25, 0.0, 0.35, 1.0],
  //   });
  // };

  return (
    <div className={styles.desktop} id = "home">
    <div className={styles.desktop2}>
      <div className={styles.desktop21}>
        <div className={styles.mainContent}>
          <div className={styles.navCentre}>
            <b className={styles.home}>
             <HashLink smooth to="/#home" style={{color:'#519259'}}>
             Home
         </HashLink></b>
            <b className={styles.home} ><HashLink smooth to="/#about" style={{color:'#519259'}}>
             About
         </HashLink></b>
            <b className={styles.home}><HashLink smooth to="/#whyus" style={{color:'#519259'}}>
             Why Us
         </HashLink></b>
         </div>
            <Example />
          <div className={styles.icon21Parent}>
            <img className={styles.icon21} alt="" src="/icon2-1@2x.png" />
            <div className={styles.ecobin}>Ecobin</div>
          </div>
          <div className={styles.wasteManagementPana11Wrapper}>
            <img
              className={styles.wasteManagementPana11}
              alt=""
              src="/waste-managementpana-1-1@2x.png"
            />
          </div>
          <div className={styles.oliveTreePana1Parent}>
            <img
              className={styles.oliveTreePana1}
              alt=""
              src="/olive-treepana-1@2x.png"
            />
              <button className={styles.registerButton} onClick={() => {
            navigate("/login");
          }}>Register Now</button>
          </div>
          <div className={styles.mainContentInner}>
            <div className={styles.revolutionizeYourWasteManagParent}>
              <b className={styles.revolutionizeYourWasteContainer}>
                <p
                  className={styles.revolutionizeYour}
                >{`Revolutionize Your `}</p>
                <p className={styles.wasteManagementSystem}>
                  <span className={styles.waste}>Waste</span>
                  <span className={styles.span}>{` `}</span>
                  <span>Management System</span>
                </p>
              </b>
              <div className={styles.doYouStruggleContainer}>
                <p className={styles.revolutionizeYour}>
                  <span>
                    Do you struggle with managing and disposing of waste
                    effectively and efficiently?
                  </span>
                  <span className={styles.span1}>{` `}</span>
                </p>
                <p className={styles.withOurStateOfTheArt}>
                  With our state-of-the-art technology and innovative
                  approach, we make waste management simple, efficient, and
                  environmentally friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about1}>
          <div className={styles.frameParent}>
            <div className={styles.benefitsOfOurWasteManagemeParent}>
              <b className={styles.benefitsOfOurContainer}>
                <span>Benefits</span>
                <span className={styles.span}>
                  {" "}
                  of Our Waste Management Solution
                </span>
              </b>
              {/* <div className={styles.aSolutionThat}>
                A Solution That Does More: Upgrade to a smarter, more
                efficient, and sustainable waste management solution.
              </div> */}
            </div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.component6Wrapper}>
            <div className={styles.component6} id = "whyus">
              <b className={styles.about2}>Why us</b>
            </div>
          </div>
          <div className={styles.aboutInner}>
            <div className={styles.benefitsOfOurWasteManagemeParent}>
              <b className={styles.benefitsOfOurContainer1}>
                <p className={styles.revolutionizeYour}>Waste Collection,</p>
                <p className={styles.revolutionizeYour}>
                  <span>{` `}</span>
                  <span className={styles.waste}>Elevated</span>
                </p>
              </b>
              <div className={styles.saveTimeAnd1}>
                Save time and resources with optimized collection thanks to
                our predictive algorithms.
              </div>
              <img
                className={styles.recyclingBro2Icon}
                alt=""
                src="/waste-managementrafiki-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.benefitsOfOurWasteManagemeParent}>
              <b className={styles.benefitsOfOurContainer}>
                <p className={styles.revolutionizeYour}>Segregation</p>
                <p className={styles.revolutionizeYour}>
                  <span>{` `}</span>
                  <span className={styles.waste}>Simplified</span>
                </p>
              </b>
              <div className={styles.saveTimeAnd}>
                Effortlessly separate waste for better disposal and increased
                recycling.
              </div>
            </div>
            <img
              className={styles.recyclingBro1Icon}
              alt=""
              src="/recyclingbro-1@2x.png"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.benefitsOfOurWasteManagemeParent}>
              <b className={styles.benefitsOfOurContainer}>
                <p className={styles.revolutionizeYour}>
                  <span>Recycle</span>
                  <span className={styles.waste}> More,</span>
                </p>
                <p className={styles.wasteManagementSystem}>
                  <span className={styles.span}>get</span>
                  <span> incentives</span>
                </p>
              </b>
              <div className={styles.saveTimeAnd}>
                Get incentives to help protect the environment with increased
                recycling and composting efforts.
              </div>
            </div>
            <img
              className={styles.recyclingBro1Icon}
              alt=""
              src="/compost-cycleamico-1-1@2x.png"
            />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.benefitsOfOurWasteManagemeParent}>
              <b className={styles.benefitsOfOurContainer2}>
                <p className={styles.revolutionizeYour}>{`Buy `}</p>
                <p className={styles.wasteManagementSystem}>Products</p>
              </b>
              <div className={styles.saveTimeAnd2}>
                Users can buy recycled products made from the waste using
                incentive points.
              </div>
            </div>
            <img
              className={styles.recyclingBro3Icon}
              alt=""
              src="/eco-consciousrafiki-1@2x.png"
            />
          </div>
          <b className={styles.copyrightEcobin}>
            <span>{`Copyright `}</span>
            <span className={styles.waste}>©EcoBin</span>
          </b>
        </div>
        <div className={styles.about3} id = "about">
          <div className={styles.frameParent1}>
            <div className={styles.benefitsOfOurWasteManagemeParent}>
              <b className={styles.aSmarterWayContainer}>
                <p className={styles.revolutionizeYour}>
                  <span className={styles.span}>{`A `}</span>
                  <span className={styles.waste}>{`Smarter Way `}</span>
                  <span>{`To `}</span>
                </p>
                <p className={styles.revolutionizeYour}>Manage Your Waste</p>
              </b>
              <div className={styles.doYouStruggleContainer2}>
                Upgrade to a smarter and more sustainable waste management
                solution with our advanced technology. Real-time tracking and
                reporting help you make data-driven decisions and reduce waste
                sent to landfills. Say goodbye to traditional waste management
                methods and join the revolution today.
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.registerButtonParent}>
                <div className={styles.registerButton1}>
                  <b className={styles.registerNow} />
                </div>
                <b className={styles.knowMore}>Know More</b>
              </div>
            </div>
          </div>
          <img className={styles.group11} alt="" src="/group-1-1@2x.png" />
          <div className={styles.component6Container}>
            <div className={styles.component61}>
              <b className={styles.about4}>About</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;

