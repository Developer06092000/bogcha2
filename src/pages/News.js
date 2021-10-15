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

export default class Educators extends Component {
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
             size={140}
             color={"#2C0091"}
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
                      <p
                        style={{
                          position: "relative",
                          top: "-10px",
                          marginLeft: "22px",
                          color: "black",
                        }}
                      >
                        <i
                          style={{ color: "#FF865E" }}
                          class="fas fa-calendar-alt"
                        ></i>{" "}
                        14/08/2020
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
                      <p
                        style={{
                          position: "relative",
                          top: "-10px",
                          marginLeft: "22px",
                          color: "black",
                        }}
                      >
                        <i
                          style={{ color: "#FF865E" }}
                          class="fas fa-calendar-alt"
                        ></i>{" "}
                        14/08/2020
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
                      <p
                        style={{
                          position: "relative",
                          top: "-10px",
                          marginLeft: "22px",
                          color: "black",
                        }}
                      >
                        <i
                          style={{ color: "#FF865E" }}
                          class="fas fa-calendar-alt"
                        ></i>{" "}
                        14/08/2020
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
                      <p
                        style={{
                          position: "relative",
                          top: "-10px",
                          marginLeft: "22px",
                          color: "black",
                        }}
                      >
                        <i
                          style={{ color: "#FF865E" }}
                          class="fas fa-calendar-alt"
                        ></i>{" "}
                        14/08/2020
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
                      <p
                        style={{
                          position: "relative",
                          top: "-10px",
                          marginLeft: "22px",
                          color: "black",
                        }}
                      >
                        <i
                          style={{ color: "#FF865E" }}
                          class="fas fa-calendar-alt"
                        ></i>{" "}
                        14/08/2020
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
                      <p
                        style={{
                          position: "relative",
                          top: "-10px",
                          marginLeft: "22px",
                          color: "black",
                        }}
                      >
                        <i
                          style={{ color: "#FF865E" }}
                          class="fas fa-calendar-alt"
                        ></i>{" "}
                        14/08/2020
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
