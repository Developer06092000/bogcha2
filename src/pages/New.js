import React, { Component } from "react";

import news1 from "../img/kinder6.png";
import styles from "../css/news.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PuffLoader from "react-spinners/PuffLoader";

import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class New extends Component {
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
              color={"#2C0091"}
              size={100}
              loading={this.state.loader}
            />
            <p> Sayt Test Rejimida Ishlamoqda!</p>
          </div>
        ) : (
          <div style={{ padding: "1px 0%" }}>
            <div className={styles.newbg}>
              <Navbar />
            </div>
            <div className={styles.newsItem}>
              <div className={styles.newtitle}>
                <h1>So'nggi Yangilik</h1>
                <div className={styles.AnimationUnderNews1}></div>
                <div className={styles.AnimationUnderNews2}></div>
              </div>
              <section>
                <Container>
                  <Row className={styles.SectionRowNew}>
                    <Col lg={6} className={styles.img}>
                      <img src={news1} />
                    </Col>
                    <Col lg={6} className={styles.text}>
                      <h1>Bog'chaga Prezident tashrif buyirdi</h1>
                      <p>
                        <i
                          style={{ color: "#FF865F" }}
                          class="fas fa-calendar-alt"
                        ></i>{" "}
                        14/08/2020
                      </p>
                      <p>
                        Joriy yilning 3-iyun kuni HUAWEI kompaniyasining
                        O‘zbekistondagi vakili Liu Jiaxin ishtirokida
                        “Al-Xorazmiy avlodlari” festivali bo'lib o'tdi.
                        Prezident, Ijod va ixtisoslashtirilgan maktablarni
                        rivojlantirish agentligi direktori Hilola Umarova
                        festivalni ochib berib, ishtirokchilarni tabrikladi: -
                        Tashkil etilgan mazkur festivalda Prezident, ijod va
                        ixtisoslashtirilgan maktablar o‘quvchilari o‘zlarining
                        loyihalari bilan qatnashishmoqda. O’ylaymanki, bugungi
                        festival o‘quvchilarimizning nafaqat o‘z mehnat va
                        iqtidorlarini namoyish etish, balki o‘zaro fikr
                        almashishlariga ham imkon yaratdi. Aytib o‘tish kerakki,
                        Huawei kompaniyasi yoshlarni axborot-texnologiyalari
                        sohasiga qiziqtirishni doimo rag‘batlantirib kelmoqda.
                        Bu kabi hamkorlikda olib borilayotgan ishlarimiz
                        yoshlarni zamonaviy kasblarga yo‘naltirishda katta
                        ahamiyatga ega. Ushbu festival ishtirokchilarini
                        tabriklayman, kelgusidagi yangidan yangi loyihalarida
                        omad tilayman.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </section>
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
