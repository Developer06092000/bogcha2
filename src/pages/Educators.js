import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import styles from "../css/educators.module.css";
import style from "../css/about_us.module.css";
import educators1 from "../img/educators1.jpg";
import educators2 from "../img/educators2.jpg";
import educators3 from "../img/educators3.jpg";
import educators4 from "../img/educators4.jpg";
import educators5 from "../img/educators5.jpg";
import PuffLoader from "react-spinners/PuffLoader";
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
} from "mdb-react-ui-kit";
import { url } from "../host/Host";
import { getBogcha } from "../host/Config";
export default class Educators extends Component {
  state = {
    loader: true,
    EducatorsGet: [],
  };

  GetEducators = () => {
    getBogcha()
      .then((res) => {
        this.setState({
          EducatorsGet: res.data.xodim,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.GetEducators();
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
              color={"#2C0091"}
              size={100}
              loading={this.state.loader}
            />
            <p> Sayt Test Rejimida Ishlamoqda!</p>
          </div>
        ) : (
          <div>
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
                  <img src={educators1} className={styles.headerImage} />
                </div>
                <div>
                  <img src={educators2} className={styles.headerImage} />
                </div>
              </Carousel>
              <div className={style.HeaderMenu}>
                <div className={style.HeaderMenuItemBox}>
                  <p></p>
                  <p>Bu Sizning Tanlovingiz</p>
                  <p></p>
                </div>
                <div className={style.HeaderMenuItemBox1}>
                  <p>Farzandingiz Eng yaxshi Mehrga Loyiq</p>
                </div>
                <div className={style.HeaderMenuItemBox2}>
                  <p>
                    {" "}
                    Flamingo orolidagi ta'lim o'qituvchilar, ota-onalar va
                    o'quvchilar mehribon va mehribon, ilmiy jihatdan boy muhitda
                    hamkorlik qiladigan go'zal raqsga o'xshaydi
                  </p>
                </div>
                <div className={style.HeaderMenuItemBox3}>
                  <p>Ma'lumot Uchun </p>
                  <p>Bog'lanish </p>
                </div>
              </div>
            </div>
            <Container>
              <div >
                <div className={styles.body}>
                  <div data-aos="fade-up" className={styles.title}>
                    <h1>Tarbiyachilar</h1>
                    <div className={styles.AnimationUnderNews1}></div>
                    <div className={styles.AnimationUnderNews2}></div>
                  </div>
                  <Row>
                    {this.state.EducatorsGet.map((item) => {
                      return (
                        <Col key={item.id} lg={12}>
                          <MDBCard
                            style={{ maxWidth: "100%", marginBottom: "60px" }}
                          >
                            <MDBRow className="g-0">
                              <MDBCol md="6" className={styles.container}>
                                <MDBCardImage
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                  src={url+item.image}
                                  alt="..."
                                  fluid
                                />
                                <div className={styles.contact}>
                                  <div className={styles.text}>
                                    <div className={styles.textbg}>
                                      <a href={item.phone}>
                                        <i class="fas fa-phone"></i>
                                      </a>
                                    </div>
                                    <div className={styles.textbg}>
                                      {" "}
                                      <a href={item.email}>
                                        <i class="fas fa-envelope-open"></i>
                                      </a>
                                    </div>
                                    <div className={styles.textbg}>
                                      <a href={item.telegram}>
                                        <i class="fas fa-paper-plane"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </MDBCol>
                              <MDBCol md="6" style={{ paddingLeft: "20px" }}>
                                <MDBCardBody>
                                  <MDBCardTitle>
                                    <h1 className={styles.title1}>
                                      Ingliz tili o'qituvchisi
                                    </h1>
                                  </MDBCardTitle>
                                  <MDBCardText>
                                    <p>
                                      <strong>F.I.O: </strong>{item.full_name}
                                    </p>
                                    <p>
                                      <strong>Tug'ilgan sana: </strong>{" "}
                                      <i
                                        style={{ color: "#FF865F" }}
                                        class="fas fa-calendar-alt"
                                      ></i>{" "}
                                      {item.date}
                                    </p>
                                    <p>
                                      <strong>Mutaxasislik: </strong>{item.mutaxassislik}
                                    </p>
                                    <p>
                                      <strong>Oliygoh: </strong>{item.otm}
                                    </p>
                                  </MDBCardText>
                                  <MDBCardText>
                                    <i
                                      style={{ color: "#FF865F" }}
                                      class="fas fa-quote-left"
                                    ></i>
                                    <br />
                                    <small className="text-muted">
                                      {item.about}
                                    </small>
                                    <br />
                                    <i
                                      style={{
                                        color: "#FF865F",
                                        float: "right",
                                      }}
                                      class="fas fa-quote-right"
                                    ></i>
                                  </MDBCardText>
                                </MDBCardBody>
                              </MDBCol>
                            </MDBRow>
                          </MDBCard>
                        </Col>
                      );
                    })}

                   
                  </Row>
                </div>
              </div>
            </Container>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
