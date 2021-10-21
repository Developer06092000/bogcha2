import React, { Component } from "react"
import style from "../css/Steam.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../img/r2.jpg"
import img4 from "../img/r4.jpeg"
import img5 from "../img/r5.jpeg"
import PuffLoader from "react-spinners/PuffLoader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
export default class Bosqich2 extends Component {
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
              className={style.loader1}              size={100}

              color={"#2C0091"}
              loading={this.state.loader}
            />
            <p> Sayt Test Rejimida Ishlamoqda!</p>
          </div>
        ) : (
          <div>
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
    
            <h1>2-BOSQICH</h1>
              <div className={style.AnimationUnderNews1}></div>
              <div className={style.AnimationUnderNews2}></div>
          <br/>
          <br/>
          <br/>


          <Container>
          <div className={style.notepad}>
            <div className={style.top}></div>
            <div className={style.paper} contenteditable="true">
            HANDS-ON LEARNING<br /><br />
              <p>
              At Flamingo we begin by providing a loving, nurturing
                environment to support the development of our now very mobile
                and active toddlers. Academics is hands-on, playful, and more
                importantly, structured and consistent.
              </p>
              BIG CONCEPTS, SMALL RATIOS<br /><br />
              <p>
              Weekly lesson plans are carefully crafted to engage our toddlers
                as they demand opportunities for exploration and play. We
                integrate our rich curriculum such as Hand Writing Without Tears
                in a joyful, playful manner. We begin identifying both upper and
                lowercase letters through multiple ways of touch, learn, and
                discovery. Mathematics is integrated via hands-on manipulative
                and small group learning formats of 6-8 students. Two very
                special studios-an Art Studio and Sensory Studio-meet the needs
                of our busy toddlers.
              </p><br/>
              <p>
              Our small student-teacher ratios complement high-quality
                learning. The results are brilliant, curious, eager little minds
                that truly develop a love for learning! Did we mention too:
                potty-training is a big milestone achieved between 24-36 months.
                Hip Hip Hooray!
              </p>
            </div>
          </div>
          </Container><br/><br/>


            <Footer />
          </div>
        )}
      </div>
    );
  }
}