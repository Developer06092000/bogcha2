import React, { Component } from "react";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/mini.module.css";
import style from '../css/about_us.module.css'
import kinder1 from "../img/kinder4.jpg";
import kinder2 from "../img/kinder5.jpg";
import kinder3 from "../img/kinder6.png";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import PuffLoader from "react-spinners/PuffLoader";

export default class Musiqa extends Component {
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
            <div className={styles.HeaderMusiqa}>
            <Navbar />
            <Carousel
              className={styles.sliderHeader}
              responsive={responsive}
              infinite={true}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              showDots={false}
            >
              <div>
                <img src={kinder1} className={styles.sliderImage} />
              </div>
              <div>
                <img src={kinder2} className={styles.sliderImage} />
              </div>
              <div>
                <img src={kinder3} className={styles.sliderImage} />
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
            <Container fluid style={{ padding: "0" }}>
              <Row>
                <Col lg={12} className={styles.text}>
                  <div style={{ textAlign:'center', justifyContent: "center" }}>
                    <h1>Musiqa</h1>
                    <div className={styles.YogajsColor}> </div>

                  </div>
                  <h2>RITMANI HIS QILING</h2>
                  <p>
                    Maktabimiz bo'ylab yaxshi tebranishlarni yuborish: musiqani
                    Flamingo Island maktabgacha ta'lim muassasasida hamma joyda
                    topish mumkin. Haftada 3 marotaba talabalar qo'shiq kuylash,
                    raqsga tushish, tebranish va odatdagi bolalar qo'shiqlari,
                    jazz, rok va shu bilan bog'liq bo'lgan hamma narsalarga
                    sakrash, raqsga tushish, tebranish va sakrash bo'yicha
                    birlashtirilgan musiqa sinflarini o'tkazdilar. Musiqa kichik
                    onglarni boyitadi, bolalarni ritm, ritmga moslashtiradi va
                    hatto bolaning aqliy qobiliyatini oshirishi mumkin.
                  </p>
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
