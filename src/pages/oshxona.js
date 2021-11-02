import React, { Component } from "react";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/mini.module.css";
import style from "../css/about_us.module.css";
import kinder1 from "../img/meal1.jpg";
import kinder2 from "../img/meal2.jpg";
import kinder3 from "../img/meal3.jpg";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Footer from "./Footer";
import PuffLoader from "react-spinners/PuffLoader";
import { getBogcha } from "../host/Config";
export default class Oshxona extends Component {
  state = {
    loader: true,
    oshxonaGet: [],
    Menu: [],
  };

  GetOshxona = () => {
    getBogcha()
      .then((res) => {
        this.setState({
          oshxonaGet: res.data,
          // Menu: res.data.menu,
        });
        // console.log("ThisOshxona", res.data.oshxona);
        // console.log("ThisMenu", res.data.menu);
        setInterval(() => {
          this.setState({
            loader: false,
          });
        }, 2000);
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.GetOshxona();
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
            <div className={styles.headerOshxona}>
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
                    className={styles.text1}
                    style={{ justifyContent: "center" }}
                  >
                    <h1>Bog'chamiz oshxonasi</h1>
                    <div className={styles.AnimationUnderNews1}></div>
                    <div className={styles.AnimationUnderNews2}></div>
                  </div>
                  <div className={style.notepad}>
                    <div className={style.top}></div>
                    <div className={style.paper} contenteditable="true">
                      Maktabgacha yoshdagi bolalarni nima bilan boqish kerak?
                      <br />
                      <p>
                        3 yoshdan 5 yoshgacha bo'lgan maktabgacha yoshdagi
                        bolalar turli xil foydali ovqatlarni iste'mol qilish
                        imkoniyatiga ega. Farzandingizga boshqa oila a'zolari
                        iste'mol qiladigan ovqatni taklif qiling. Turli xil
                        ta'm, to'qima va ranglarga ega ovqatlarni taklif eting
                      </p>
                      <br />
                      Maktabgacha tarbiyalanuvchi qancha ovqat yeyishi kerak?
                      <br />
                      <p>
                        Farzandingiz siz taklif qilayotgan ovqatlardan qancha
                        ovqat iste'mol qilishni hal qilsin. Farzandingizni ovqat
                        eyishga majburlamang yoki unga ruxsat berilgan ovqat
                        miqdorini cheklamang. Ba'zi kunlarda ular ko'proq
                        ovqatlanishlari mumkin. Ba'zi kunlarda ular kamroq
                        ovqatlanishlari mumkin. Bolaning ishtahasi kundan-kunga
                        o'zgarishi mumkin. Quyidagi namunaviy taomlardan faqat
                        umumiy ko'rsatmalar sifatida foydalaning. Ovqatlanish va
                        atıştırmalıklarni har kuni bir vaqtning o'zida
                        rejalashtiring, shunda ovqatlanish vaqti kelganida
                        bolangiz och qoladi.
                      </p>
                    </div>
                  </div>
                  <h2 className={styles.TextH2}>
                    Maktabgacha yoshdagi bolalar uchun namunaviy ovqatlanish: 3
                    yoshdan 5 yoshgacha
                  </h2>

                  <div className={styles.AnimationUnderNews1}></div>
                  <div className={styles.AnimationUnderNews2}></div>
                  <div className={styles.MenuGroup}>
                   
                    <Table striped bordered hover>
                      <thead>
                        <tr
                          variant="dark"
                          style={{ backgroundColor: "black", color: "white" }}
                        >
                          <th colSpan="5" style={{ textAlign: "center" }}>
                            Menu
                          </th>
                        </tr>
                        <tr>
                          <th>Id</th>
                          <th>Ovqatlanish Vaqti</th>
                          <th>1-Ovqat</th>
                          <th>2-ovqat</th>
                          <th>2-ovqat</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Nonushta</td>
                          <td>Otto</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Tushlik</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Kechlik</td>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </Table>
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
