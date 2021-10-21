import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../css/Steam.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../img/r3.jpg";
import styles from "../css/about_us.module.css";

import img4 from "../img/r4.jpeg";
import img5 from "../img/r5.jpeg";
import PuffLoader from "react-spinners/PuffLoader";
import { Container } from "react-bootstrap";

export default class Bosqich3 extends Component {
  state = {
    loader: true,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
  }

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
        {this.state.loader ? (
          <div className={style.loader}>
            <PuffLoader
              className={style.loader1}
              color={"#2C0091"}
              size={100}
              loading={this.state.loader}
            />
            <p> Sayt Test Rejimida Ishlamoqda!</p>
          </div>
        ) : (
          <div>
                        <div className={style.HeaderForBosqich}>

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
            <h1>3-BOSQICH</h1>
            <div className={style.AnimationUnderNews1}></div>
            <div className={style.AnimationUnderNews2}></div>
            <br />
            <br />
            <br />

            <Container>
              <div className={style.notepad}>
                <div className={style.top}></div>
                <div className={style.paper} contenteditable="true">
                  A GREAT BIG WORLD
                  <br />
                  <br />
                  <p>
                    Entering the magical, fantastical world, are our newly
                    minted three’s. Is there a monster under my bed? Absolutely!
                    Can superhero ﬂy and ﬁght bad guys? Yes and yes again! This
                    is an exciting time of a child’s life as they discover a
                    greater sense of identity and begin to distinguish fantasy
                    from reality. At Flamingo, we nurture a child’s creative
                    imagination while building a strong, healthy, academic
                    background.
                  </p>
                  WELL-ROUNDED EDUCATION
                  <br />
                  <br />
                  <p>
                    Yoga, gardening, and cooking become possible as we have now
                    mastered pottytraining! Flamingo students learn about the
                    world in which they live, the continents on planet Earth,
                    and impress us by being able to write and identify their own
                    names! With much love, support, and encouragement, Flamingo
                    oﬀers a well-rounded rich learning experience that will
                    leave you sometimes jaw dropped when they come home saying
                    the newest NASA discoveries.
                  </p>
                </div>
              </div>
            </Container>
            <br />
            <br />

            <Footer />
          </div>
        )}
      </div>
    );
  }
}
