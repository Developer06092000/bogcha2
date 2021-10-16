import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import styles from "../css/news.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PuffLoader from "react-spinners/PuffLoader";
import news1 from "../img/kinder6.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
              </div>
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
