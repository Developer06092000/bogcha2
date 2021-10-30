import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/about_us.module.css";
import about1 from "../img/about1.jpg";
import about2 from "../img/about2.jpg";
import about3 from "../img/about3.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PuffLoader from "react-spinners/PuffLoader";
import { Button } from "antd";

export default class About_us extends Component {
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
            <div className={styles.headerAbout}>
              {" "}
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
                  <img
                    src="https://vestikavkaza.ru/upload/2016-02-25/ea3d4df1467f5cee7d2653de33b3ad64.jpg"
                    src={about1}
                    className={styles.headerImage}
                  />
                </div>
                <div>
                  <img
                    src="https://static.sof.uz/crop/1/3/826__90_136688611.jpg"
                    className={styles.headerImage}
                  />
                </div>
                <div>
                  <img
                    src="https://www.gazeta.uz/media/img/2018/01/hisJcS15154774245497_l.jpg"
                    className={styles.headerImage}
                  />
                </div>
              </Carousel>
              <div className={styles.HeaderMenu}>
                <div className={styles.HeaderMenuItemBox}>
                  <p></p>
                  <p>Bu Sizning Tanlovingiz</p>
                  <p></p>
                </div>
                <div className={styles.HeaderMenuItemBox1}>
                  <p>Farzandingiz Eng yaxshi Mehrga Loyiq</p>
                </div>
                <div className={styles.HeaderMenuItemBox2}>
                  <p>
                    {" "}
                    Flamingo orolidagi ta'lim o'qituvchilar, ota-onalar va
                    o'quvchilar mehribon va mehribon, ilmiy jihatdan boy muhitda
                    hamkorlik qiladigan go'zal raqsga o'xshaydi
                  </p>
                </div>
                <div className={styles.HeaderMenuItemBox3}>
                  <p>Ma'lumot Uchun </p>
                  <p>Bog'lanish </p>
                </div>
              </div>
            </div>
            <Container>
              <body>
                <div className={styles.body}>
                  <div className={styles.title}>
                    <h1>Biz haqimizda</h1>{" "}
                    <div className={styles.AnimationUnderNews1}></div>
                    <div className={styles.AnimationUnderNews2}></div>
                  </div>
                  <div className={styles.notepad}>
                    <div className={styles.top}></div>
                    <div className={styles.paper} contenteditable="true">
                      <strong>UYDAN UYGA</strong>
                      <br />
                      <p>
                        Biz erta yoshdagi bolalar tarbiyasi kuchiga ishonadigan
                        o'qituvchilar va ma'murlarning ajoyib guruhimiz. Bizning
                        fidoyi va g'ayratli o'qituvchilar va ma'murlar jamoasi
                        sizning kichkintoyingizni Flamingo oilasida kutib
                        olishga tayyor. Siz bizning maktabimizning bir qismiga
                        aylanganingizdan so'ng, o'rganish turli shakllarda
                        boshlanadi.
                      </p>
                      <br />
                      <strong>BIZNING OILA VA JAMOAT</strong>
                      <br />{" "}
                      <p>
                        Bizning to'rtinchi iyul bayrami, Bog'dorchilik
                        tadbirlari, Kichik DaVinchi kuni, Buvilar va bobolar
                        partiyalari kabi yuqori darajada ishtirok etadigan
                        oilaviy tadbirlarimizdan, har yili ikki yilda bir marta
                        o'tkaziladigan ota-onalar va o'qituvchilar
                        konferentsiyalariga qadar, ta'lim va o'sish BUTUN
                        oilani, eng muhimi, BUTUN bolani o'z ichiga olgan
                        tajribaga aylanadi. Biz tuzilishga, muntazam va
                        akademiklarga e'tibor qaratadigan maktabmiz, lekin biz
                        quvonch va o'yin bo'lgan muvaffaqiyatli o'rganish uchun
                        juda muhim tarkibiy qismlarga ishonamiz.
                      </p>
                      <br/>
                    </div>
                  </div>

                 
                </div>
              </body>
            </Container>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
