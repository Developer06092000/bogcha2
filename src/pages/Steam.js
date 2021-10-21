import React, { Component } from "react";
import style from "../css/Steam.module.css";
import styles from '../css/about_us.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../img/r1.jpg";
import img2 from "../img/r2.jpg";
import img3 from "../img/r3.jpg";
import img4 from "../img/r4.jpeg";
import img5 from "../img/r5.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default class Steam extends Component {
  render() { 
       const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 993 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 992, min: 769 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 567 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 566, min: 0 },
      items: 1,
    },
  };
    return (
      <div className={style.mat}>
          <div className={style.HeaderSteam}>
        <Navbar />
        <Carousel
              className={style.sliderHeader}
              responsive={responsive}
              infinite={true}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              showDots={false}
            >
              <div>
                <img src={img1} className={style.sliderImage} />
              </div>
              <div>
                <img src={img4} className={style.sliderImage} />
              </div>
              <div>
                <img src={img5} className={style.sliderImage} />
              </div>
            </Carousel>
        <div className={styles.HeaderMenu}>
              <div className={styles.HeaderMenuItemBox}>
                <p></p>
                <p>Bu Sizning Tanlovingiz</p>
                <p></p>
              </div>
              <div className={styles.HeaderMenuItemBox1}>
                <p>Farzandingiz Eng yaxshi Mehrga Loyiq</p>
              </div>
              <div className={styles.HeaderMenuItemBox2}>
                <p>
                  {" "}
                  Flamingo orolidagi ta'lim o'qituvchilar, ota-onalar va
                  o'quvchilar mehribon va mehribon, ilmiy jihatdan boy muhitda
                  hamkorlik qiladigan go'zal raqsga o'xshaydi
                </p>
              </div>
              <div className={styles.HeaderMenuItemBox3}>
                <p>Ma'lumot Uchun </p>
                <p>Bog'lanish </p>
              </div>
              </div>
              </div>
            
        <div className={style.matn}>
          <h1>STEAM</h1>
          <div className={style.SteamChangeColor}
           
          ></div>
          <br />
          <h5>EVER-CHANGING WORLD</h5>
          <p>
            Preparing young children for the 21st century means prepping them to
            be successful in a highly demanding and ever-changing world.
            Flamingo will work to stretch each child’s educational experiences
            beyond simply worksheets and ABC’s. STEAM is beyond dated
            educational practices that plague our educational system such as
            repetitive and uninspiring dated worksheets. We are hands-on, ﬂuid,
            mobile, and ﬂexible. We integrate at every step of the way, all day,
            every day. This is education at Flamingo Island Preschool.
          </p>
          <h5>SCIENCE</h5>
          <p>
            Science at Flamingo is about encouraging wonder, curiosity and
            creating one’s own hypothesis. Nurturing a child’s inner sense of
            natural curiosity is the beauty of early childhood experiences.
          </p>
          <h5>TECHNOLOGY</h5>
          <p>
            Technology is a big word for fun new toys at Flamingo! We stretch
            children’s boundaries by oﬀering opportunities to play with big,
            expensive equipment such as telescopes, microscopes, computers,
            video cameras, and other gadgets that are a necessity to master. Oﬀ
            course, nothing beats our interactive SMART Board, an incredible
            contribution to the fundraising eﬀorts of all Flamingo Island
            Parents!
          </p>
          <h5>ENGINEERING</h5>
          <p>
            Engineering is providing students the opportunity to critically
            problem solve new challenges in front of them. From making bridges
            to creating snap circuits and gooey slime, bridging subjects and
            problem solving are at the heart of a young child’s start to
            discovering solutions.
          </p>
          <h5>ART</h5>
          <p>
            The arts are highly celebrated at Flamingo. Little DaVinci Day is
            where we celebrate each child’s artwork adorned throughout the
            school. Students as young as 12 months are encouraged to get messy
            and paint! Going outside of the paper is also encouraged as we can
            paint on the walls and ﬂoors of our own Art Studio. Art is about
            being able to express ideas and encouraging creative ideas and
            imagination. Music, dance, and yoga are also examples of how we
            build young children into well-rounded little artists.
          </p>
          <h5>MATHEMATICS</h5>
          <p>
            Mathematics at Flamingo is hands-on-learning. Math is more than just
            counting or numbers on a worksheet. We encourage students to think
            about math in their everyday lives and not simply an isolated
            subject. Mathematical thinking includes patterns, sorting, shapes,
            puzzles, addition, subtraction, division, lessons that are delivered
            in simple, playful ways for a young student to grasp such commonly
            abstract thoughts.
          </p>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}
