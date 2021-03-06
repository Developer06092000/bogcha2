import React, { Component } from "react";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/mini.module.css";
import style from "../css/about_us.module.css";
import kinder1 from "../img/kinder4.jpg";
import kinder2 from "../img/kinder5.jpg";
import kinder3 from "../img/kinder6.png";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import PuffLoader from "react-spinners/PuffLoader";

export default class Wonder extends Component {
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
            <div className={styles.wonderHeader}>
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
                  <div
                    style={{ justifyContent: "center", textAlign: "center" }}
                  >
                    <h1>Ajoyib / qiziquvchanlik</h1>
                    <div className={styles.AnimationUnderNews1}></div>
                    <div className={styles.AnimationUnderNews2}></div>
                  </div>
                  <div className={style.notepad}>
                    <div className={style.top}></div>
                    <div className={style.paper} contenteditable="true">
                      Qutichani tashqarida deb o'ylang
                      <br />
                      <p>
                        Flamingo o'ylamasdan o'ylashga bo'lgan munosabatni
                        rag'batlantiradi. Ilmiy, texnologiya, muhandislik,
                        san'at va matematikaga e'tiborni qaratib, yosh bolalarga
                        an'anaviy ta'lim usullarini XXI asr loyihalari asosida
                        aralashtirish imkoniyatlari beriladi. O'qish va yozish
                        faqat ish sahifalaridan tashqariga chiqadigan asosiy
                        domenlardir. Musiqa, yoga, bog'dorchilik va uy
                        xo'jaligini birlashtirish ham Flamingo talabalarining
                        har tomonlama barkamolligini oshiradi.
                      </p>
                      <br />
                      Qo'llanilishini o'rganish
                      <br />
                      <p>
                        Flamingo o'qituvchilari o'quv muhitini yaratadilar, bu
                        o'quvchilarga tanqidiy fikrlash va muammolarni hal
                        qilishni rivojlantirish uchun keng imkoniyatlar
                        yaratadi. Bizning fikrimizcha, bolalar ta'lim olish
                        yo'llarida noyobdir. Talabalar uchun yangi
                        kontseptsiyalarni o'rganish uchun bir nechta va noyob
                        usullarni taqdim etish ajoyib va quvonchli maktab
                        tajribasini oshiradi. Eskirgan yangi tushunchalar
                        an'anaviy qalam va qog'oz bilan hissiyotlarni jalb
                        qilishni yoki sinfda birgalikda hikoyani namoyish
                        qilishni anglatishi mumkin.
                      </p>
                    </div>
                  </div>
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
