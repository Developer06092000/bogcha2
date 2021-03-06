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
import "react-multi-carousel/lib/styles.css";
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
import { getBogcha } from "../host/Config";
import { url } from "../host/Host";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

export default class Dashboardnews extends Component {
  state = {
    DashboardNewsGet: [],
  };

  GetDashboardNews = () => {
    getBogcha()
      .then((res) => {
        this.setState({
          DashboardNewsGet: res.data.yangilik,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  componentDidMount() {
    this.GetDashboardNews();
  }

  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div>
        <Container>
          <body>
            <div className={styles.body}>
              <div  className={styles.title}>
                <h1>Yangiliklar</h1>
                <div className={styles.AnimationUnderTadbir1}></div>
                <div className={styles.AnimationUnderTadbir2}></div>
              </div>
              <Carousel
                responsive={responsive}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                infinite={true}
              >
                {this.state.DashboardNewsGet.map((news) => {
                  return (
                    <div key={news.id}>
                      <MDBCol style={{ margin: "10px", height: "auto" }}>
                        <MDBCard className="h-100" className={style.card}>
                          <MDBCardImage
                            src={url + news.image}
                            className={style.img}
                            alt="..."
                            position="top"
                          />
                          <MDBCardBody>
                            <MDBCardTitle className={style.MBDforTitle}>
                              {news.title}
                            </MDBCardTitle>
                            <MDBCardText className={style.MBDforText}>
                              {news.text}
                            </MDBCardText>
                            
                          </MDBCardBody>
                          <MDBCardFooter   className={style.MBDforFooter}>
                            <p>
                              <FaCalendarAlt
                                style={{ fontSize: "17px", color: "#FF865F" }}
                              />{" "}
                              <span>{news.date}</span>
                            </p>
                            <p>
                            <Link to="/yangilik/uz">
                              <p
                                className={style.ButtonInfoForText}
                                style={{ color: "white" }}
                              >
                                Batafsil
                              </p>
                            </Link>
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
                            <i
                              style={{ color: "#FF865F" }}
                              class="fas fa-calendar-alt"
                            ></i>{" "}
                            14/08/2020
                          </p>
                          <Link to="/yangilik/uz">
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
                            <i
                              style={{ color: "#FF865F" }}
                              class="fas fa-calendar-alt"
                            ></i>{" "}
                            14/08/2020
                          </p>
                          <Link
                            to="/yangilik/uz"
                            style={{
                              color: "#FEE440",
                            }}
                          >
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
                            <i
                              style={{ color: "#FF865F" }}
                              class="fas fa-calendar-alt"
                            ></i>{" "}
                            14/08/2020
                          </p>
                          <Link to="/yangilik/uz">
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
              {/* <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
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
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
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
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
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
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
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
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
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
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
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
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow> */}
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
