import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import styles from "../css/news.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PuffLoader from "react-spinners/PuffLoader";
import news1 from "../img/kinder6.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import about1 from "../img/about1.jpg";
import about2 from "../img/about2.jpg";
import about3 from "../img/about3.jpg";
import star from "../img/star.png"
import delivery from "../img/delivery.png"
import frame from "../img/frame.png"
import bg from "../img/bg.png"
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { BsGeoAlt } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
export default class Tadbirlar extends Component {
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
      <div>
        {this.state.loader ? (
          <div className={styles.loader}>
            <PuffLoader
              className={styles.loader1}
              color={"#2C0091"}              size={100}

              loading={this.state.loader}
            />
            <p> Sayt Test Rejimida Ishlamoqda!</p>
          </div>
        ) : (
          <div>
            <header>
              <div className={styles.header}>
                <Navbar />
                <Carousel
                  className={styles.sliderHeader}
                  responsive={responsive}
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={false}
                  showDots={false}
                >
                  <div>
                    <img src={about1} className={styles.headerImage} />
                  </div>
                  <div>
                    <img src={about2} className={styles.headerImage} />
                  </div>
                  <div>
                    <img src={about3} className={styles.headerImage} />
                  </div>
                </Carousel>
                <div className={styles.header__box}>
                  <div className={styles.star}><img src={star} />Trustpilot 4.6(136 reviews)</div>
                  <div className={styles.lines}>
                  	<div className={styles.line}></div>
										<p>Because you</p>
                  	<div className={styles.line}></div>
									</div>
									<h2>deserve the best skin possible</h2>
									<p className={styles.p__title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
									<div className={styles.buttons}> 
										<Button style={{marginRight:'5%'}} variant="light">Start Free Consultation</Button>
										<Button variant="outline-light">Why Choose Dahl?</Button>
									</div>
									<div className={styles.links}>
									<div className={styles.link}><img src={delivery} /><p>free express delivery</p></div>
									<div className={styles.link}><img src={frame} /><p>Money back guaranteed</p></div>
									</div>
								</div>
              </div>
							<svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF" fill-opacity="1" d="M0,256L1440,192L1440,320L0,320Z"></path></svg>
            </header>

            <Container>
              <ul className={styles.cards}>
                <li>
                  <a href="" className={styles.card}>
                    <img src={news1} className={styles.card__image} alt="" />
                    <div className={styles.card__overlay}>
                      <div className={styles.card__header}>
                        <svg
                          className={styles.card__arc}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div className={styles.card__header_text}>
                          <h3 className={styles.card__title}>
                            Bog'chamizga prezident tashrif buyirdi.
                          </h3>
                          <span className={styles.card__status}>Batafsil</span>
                        </div>
                      </div>
                      <p style={{ display: "inline" }}>
                        <FaCalendarAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#FF865E",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            marginBottom: "20px",
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          14/08/2020
                        </span>
                      </p>
                      <p style={{ display: "inline" }}>
                        <BsGeoAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#1597E5",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            marginBottom: "20px",
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          133-bog'cha
                        </span>
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className={styles.card}>
                    <img src={news1} className={styles.card__image} alt="" />
                    <div className={styles.card__overlay}>
                      <div className={styles.card__header}>
                        <svg
                          className={styles.card__arc}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div className={styles.card__header_text}>
                          <h3 className={styles.card__title}>
                            Bog'chamizga prezident tashrif buyirdi.
                          </h3>
                          <span className={styles.card__status}>Batafsil</span>
                        </div>
                      </div>
                      <p style={{ display: "inline" }}>
                        <FaCalendarAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#FF865E",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            marginBottom: "20px",
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          14/08/2020
                        </span>
                      </p>
                      <p style={{ display: "inline" }}>
                        <BsGeoAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#1597E5",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            marginBottom: "20px",
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          133-bog'cha
                        </span>
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className={styles.card}>
                    <img src={news1} className={styles.card__image} alt="" />
                    <div className={styles.card__overlay}>
                      <div className={styles.card__header}>
                        <svg
                          className={styles.card__arc}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div className={styles.card__header_text}>
                          <h3 className={styles.card__title}>
                            Bog'chamizga prezident tashrif buyirdi.
                          </h3>
                          <span className={styles.card__status}>Batafsil</span>
                        </div>
                      </div>
                      <p style={{ display: "inline" }}>
                        <FaCalendarAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#FF865E",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            marginBottom: "20px",
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          14/08/2020
                        </span>
                      </p>
                      <p style={{ display: "inline" }}>
                        <BsGeoAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#1597E5",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            marginBottom: "20px",
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          133-bog'cha
                        </span>
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className={styles.card}>
                    <img src={news1} className={styles.card__image} alt="" />
                    <div className={styles.card__overlay}>
                      <div className={styles.card__header}>
                        <svg
                          className={styles.card__arc}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div className={styles.card__header_text}>
                          <h3 className={styles.card__title}>
                            Bog'chamizga prezident tashrif buyirdi.
                          </h3>
                          <span className={styles.card__status}>Batafsil</span>
                        </div>
                      </div>
                      <p style={{ display: "inline" }}>
                        <FaCalendarAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#FF865E",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            marginBottom: "20px",
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          14/08/2020
                        </span>
                      </p>
                      <p style={{ display: "inline" }}>
                        <BsGeoAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#1597E5",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            marginBottom: "20px",
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          133-bog'cha
                        </span>
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className={styles.card}>
                    <img src={news1} className={styles.card__image} alt="" />
                    <div className={styles.card__overlay}>
                      <div className={styles.card__header}>
                        <svg
                          className={styles.card__arc}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div className={styles.card__header_text}>
                          <h3 className={styles.card__title}>
                            Bog'chamizga prezident tashrif buyirdi.
                          </h3>
                          <span className={styles.card__status}>Batafsil</span>
                        </div>
                      </div>
                      <p style={{ display: "inline" }}>
                        <FaCalendarAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#FF865E",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            marginBottom: "20px",
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          14/08/2020
                        </span>
                      </p>
                      <p style={{ display: "inline" }}>
                        <BsGeoAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#1597E5",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            marginBottom: "20px",
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          133-bog'cha
                        </span>
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className={styles.card}>
                    <img src={news1} className={styles.card__image} alt="" />
                    <div className={styles.card__overlay}>
                      <div className={styles.card__header}>
                        <svg
                          className={styles.card__arc}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <div className={styles.card__header_text}>
                          <h3 className={styles.card__title}>
                            Bog'chamizga prezident tashrif buyirdi.
                          </h3>
                          <span className={styles.card__status}>Batafsil</span>
                        </div>
                      </div>
                      <p style={{ display: "inline" }}>
                        <FaCalendarAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#FF865E",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          14/08/2020
                        </span>
                      </p>
                      <p style={{ display: "inline" }}>
                        <BsGeoAlt
                          style={{
                            marginBottom: "20px",
                            fontSize: "17px",
                            color: "#1597E5",
                            marginLeft: "22px",
                            position: "relative",
                            top: "-10px",
                          }}
                        />{" "}
                        <span
                          style={{
                            color: "black",
                            position: "relative",
                            top: "-18px",
                          }}
                        >
                          133-bog'cha
                        </span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </Container>



            <Footer />
          </div>
        )}
      </div>
    );
  }
}
