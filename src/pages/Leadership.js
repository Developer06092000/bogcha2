import React, { Component } from "react";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/mini.module.css";
import kinder1 from "../img/kinder7.png";
import kinder2 from "../img/kinder8.jpg";
import kinder3 from "../img/kinder9.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import PuffLoader from "react-spinners/PuffLoader";

export default class Leadership extends Component {
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
              color={"#2C0091"}
              size={100}
              loading={this.state.loader}
            />
            <p> Sayt Test Rejimida Ishlamoqda!</p>
          </div>
        ) : (
          <div>
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
            <Container fluid style={{ padding: "0" }}>
              <Row>
                <Col lg={12} className={styles.text}>
                  <div
                    style={{ justifyContent: "center", textAlign: "center" }}
                  >
                    <h1>G'ayrat. Nishon. Etakchilik.</h1>
                    <div className={styles.AnimationUnderNews1}></div>
                    <div className={styles.AnimationUnderNews2}></div>
                  </div>
                  <h2>Rivojlanish uchun imkoniyatlar</h2>
                  <p>
                    Flamingo o'quvchilarni hozirgi bilim va ko'nikmalarga
                    asoslanib, ularning yoshiga va o'qish darajalariga mos
                    keladigan standartlarga mos keladi. Biz bolaning qiziqishini
                    hisobga olgan holda va yoshiga mos akademiklarni ta'minlash
                    orqali o'quv jarayonini quvonchli holga keltiramiz. Yodda
                    tutish va burg'ulash jadvallari Flamingo sinflarida joy
                    yo'q.
                  </p>
                  <h2>Muvofiq o'qitish metdokikasi</h2>
                  <p>
                    Biz hissiyotlar orqali teginish, o'ynash va kashfiyot orqali
                    o'rganishni rag'batlantiradigan nihoyatda amaliy maktabmiz.
                    Mehnatsevarlik, fidoyilik va qat'iyatlilik bizni
                    ulug'laydigan fazilatlardir. Yosh bolalarga odob-axloqli,
                    yosh etakchilar bo'lib o'sishi va o'sishi uchun juda katta
                    yordam ko'rsatilmoqda. Biz ochiq suhbatlarni, mustaqillikni
                    va tavakkal qilishni tavsiya qilamiz. Biz yaratayotgan
                    g'amxo'r o'quv jamoatchiligi bolani yangi marralarni zabt
                    etganda xavf-xatarni his qilishiga imkon beradi.
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
