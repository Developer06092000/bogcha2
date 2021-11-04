import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import styles from "../css/news.module.css";
import style from "../css/DashboardNews.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PacmanLoader from "react-spinners/PacmanLoader";
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
import "react-multi-carousel/lib/styles.css";
import { FaCalendarAlt } from "react-icons/fa";
import { getBogcha } from "../host/Config";
import { url } from "../host/Host";
export default class Dashboardtadbir extends Component {
  state = {
    DashboardTadbirGet: [],
  };
  GetDashboardTad = () => {
    getBogcha()
      .then((res) => {
        this.setState({
          DashboardTadbirGet: res.data.tadbir,
        });
        console.log("GetDashTadbir", res.data.tadbir);
      })
      .catch((err) => {
        console.log("ErrorDashTad", err);
      });
  };
  componentDidMount() {
    this.GetDashboardTad();
  }

  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 500 },
        items: 2,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };
    return (
      <div>
        <Container>
          <body>
            <div className={style.body}>
              <div className={style.title}>
                <h1>Tadbirlar</h1>
                <div className={style.AnimationUnderTadbir1}></div>
                <div className={style.AnimationUnderTadbir2}></div>
              </div>
              <Carousel
                responsive={responsive}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                infinite={true}
              >
                {this.state.DashboardTadbirGet.map((tad) => {
                  return (
                    <div key={tad.id}>
                      <MDBCol style={{ margin: "10px", height: "auto" }}>
                        <MDBCard className="h-100" className={style.card}>
                          <MDBCardImage
                            src={url + tad.image}
                            className={style.img}
                            alt="..."
                            position="top"
                          />
                          <MDBCardBody>
                            <MDBCardTitle className={style.MBDforTitle}>
                              {tad.name}
                            </MDBCardTitle>
                            <MDBCardText className={style.MBDforText}>
                              {tad.text}
                            </MDBCardText>
                            <div className={style.ButtonBatafsil}>
                              <Link to="/tadbir/uz">
                                <p
                                  className={style.ButtonInfoForText}
                                  style={{ color: "white" }}
                                >
                                  Batafsil
                                </p>
                              </Link>
                            </div>
                          </MDBCardBody>
                          <MDBCardFooter className={style.MBDforFooter}>
                            <p>
                              <FaCalendarAlt
                                style={{ fontSize: "17px", color: "#FF865F" }}
                              />{" "}
                              <span>{tad.date}</span>
                            </p>
                            <p>
                              <BsGeoAlt
                                style={{ fontSize: "17px", color: "#1A73E8" }}
                              />{" "}
                              <span>{tad.address}</span>
                            </p>
                          </MDBCardFooter>
                        </MDBCard>
                      </MDBCol>
                    </div>
                  );
                })}

                {/* <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={style.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <FaCalendarAlt
                              style={{ fontSize: "17px", color: "#FF865F" }}
                            />{" "}
                            <span>14/08/2020</span>
                          </p>
                          <p>
                            <BsGeoAlt
                              style={{ fontSize: "17px", color: "#A2D2FF" }}
                            />{" "}
                            <span>133-bog'cha</span>
                          </p>
                          <Link to="/tadbir/uz">
                            <p
                              className={styles.ButtonInfoForText}
                              style={{ color: "white" }}
                            >
                              Batafsil
                            </p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={style.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <FaCalendarAlt
                              style={{ fontSize: "17px", color: "#FF865F" }}
                            />{" "}
                            <span>14/08/2020</span>
                          </p>
                          <p>
                            <BsGeoAlt
                              style={{ fontSize: "17px", color: "#A2D2FF" }}
                            />{" "}
                            <span>133-bog'cha</span>
                          </p>
                          <Link to="/tadbir/uz">
                            <p
                              className={styles.ButtonInfoForText}
                              style={{ color: "white" }}
                            >
                              Batafsil
                            </p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={style.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <FaCalendarAlt
                              style={{ fontSize: "17px", color: "#FF865F" }}
                            />{" "}
                            <span>14/08/2020</span>
                          </p>
                          <p>
                            <BsGeoAlt
                              style={{ fontSize: "17px", color: "#A2D2FF" }}
                            />{" "}
                            <span>133-bog'cha</span>
                          </p>
                          <Link to="/tadbir/uz">
                            <p
                              className={styles.ButtonInfoForText}
                              style={{ color: "white" }}
                            >
                              Batafsil
                            </p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div> */}
              </Carousel>
              <br />
              <br />
              <br />
            </div>
          </body>
        </Container>
      </div>
    );
  }
}
