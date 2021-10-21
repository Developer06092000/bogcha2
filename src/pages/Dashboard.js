import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../css/Dashboard.module.css";
import kinder from "../video/kinder.mp4";
import rasm1 from "../img/ftr-logo.png";
import rasm2 from "../img/heart-btn.png";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import icon5 from "../img/icon5.png";
import icon6 from "../img/icon6.png";
import rasm3 from "../img/1.jpg";
import border from "../img/Sunrise.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { Progress } from "antd";
import AOS from "aos";
import rasm5 from "../img/logo-dark.png";
import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import rasm4 from "../img/3s-Photo-3.jpg";
import rasm7 from "../img/engagement.jpg";
import rasm6 from "../img/love.jpg";
import PuffLoader from "react-spinners/PuffLoader";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Dashboardnews from "./Dashboardnews";
import Dashboardtadbir from "./Dashboardtadbir";
import Carousel from "react-multi-carousel";
import school from "../img/gerb.jpg";
import her2 from "../img/h2.jpg";
import her3 from "../img/h3.jpg";
import her4 from "../img/h4.jpg";
import her5 from "../img/h5.png";
import her6 from "../img/h6.png";
import YouTube from "@u-wave/react-youtube";
import HeadOne from "../img/bogcha2/B7.jpeg";
import mentor from "../img/bogcha2/Dashboard/icon.png";
import imgDegre1 from "../img/bogcha2/A8.jpeg";
import imgDegre2 from "../img/q3.jpg";
import qabul from "../img/educators1.jpg";
import qabul1 from "../img/bogcha2/A2.jpeg";
import qabul3 from "../img/bogcha2/A1.jpeg";
import ChildImg from "../img/bogcha2/Child1.jpg";
import { Button } from "antd";
import OutlineRasm from "../img/bogcha2/Dashboard/circleOut.png";
import { GiTeacher } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa";

export default class Dashboard extends Component {
  state = {
    loader: true,
  };

  // -----------------------------
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
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };
    AOS.init({
      duration: 1200,
    });

    return (
      <div>
        {this.state.loader ? (
          <div className={styles.loader}>
            <PuffLoader
              className={styles.loader1}
              size={100}
              color={"#2C0091"}
              loading={this.state.loader}
            />
            <p> Sayt Test Rejimida Ishlamoqda!</p>
          </div>
        ) : (
          <div>
            <div className={styles.header}>
              <div className={styles.NavbarMenuItem}>
                <Navbar />
              </div>
              <div className={styles.headerItemGroup}>
                <div className={styles.headerItem}>
                  <p className={styles.headerItem1}>
                    Farzandingizning Kelajagini biz bilan birga yarating!
                  </p>
                  <p className={styles.headerItem2}>
                    Bizning ta'lim sifatimiz reytengi eng yuqori va
                    standartlarga javob beradi!
                  </p>
                  <p>
                    <form className={styles.FormSearch} action="/" method="get">
                      <input
                        style={{ border: "none" }}
                        type="text"
                        id="header-search"
                        placeholder="Search blog posts"
                        name="s"
                      />
                      <button type="submit">
                        <i style={{ color: "white" }}>Search</i>
                      </button>
                    </form>
                  </p>
                </div>
                <div className={styles.headerItem}>
                  <div className={styles.headerRight}>
                    <p className={styles.OutlineImg}>
                      <img src={OutlineRasm} />
                      <p data-aos="zoom-in" className={styles.MentorPragress}>
                        <p className={styles.MentorPragress1}>
                          <GiTeacher className={styles.MentorPragressIcon} />
                        </p>

                        <p className={styles.MentorPragress2}>
                          <p>O'qituvchilar!</p>
                          <b>150 ta</b>
                        </p>
                      </p>

                      <p data-aos="zoom-in" className={styles.PragressItem}>
                        {" "}
                        <Progress
                          id={styles.PragressItem1}
                          type="circle"
                          size={10}
                          width="50px"
                          strokeColor={{
                            "0%": "#FFB254",
                            "100%": "#FFB254",
                          }}
                          percent={90}
                          status="active"
                        />
                        <br />
                        <b>500 Users</b>
                        <p>Bizning mijozlar!</p>
                      </p>

                      <p data-aos="zoom-in" className={styles.PeopleProgress}>
                        <p className={styles.PeopleProgress1}>
                          <p>O'quvchilar!</p>
                          <b>1000 +</b>
                        </p>
                        <p className={styles.PeopleProgress2}>
                          <FaPeopleArrows
                            className={styles.PeopleProgressIcon}
                          />
                        </p>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.CardGroupItem}>
                <div className={styles.OurPragram}>
                  <b id={styles.OurPragramB} style={{ marginTop: "10px" }}>
                    Bizning Kurs
                  </b>
                </div>
                <div className={styles.OurPragram}>
                  <i
                    id={styles.fontAwesomeIcon}
                    style={{ color: "red" }}
                    class="fas fa-heartbeat fa-3x"
                  ></i>
                  <p>
                    <Link to="/yoga/uz">Sport</Link>
                  </p>
                </div>
                <div className={styles.OurPragram}>
                  <i
                    id={styles.fontAwesomeIcon}
                    style={{ color: "#35BDBB" }}
                    class="fas fa-music fa-3x"
                  ></i>
                  <p>
                    <Link to="/musiqa/uz">Musiqa</Link>
                  </p>
                </div>
                <div className={styles.OurPragram}>
                  <i
                    id={styles.fontAwesomeIcon}
                    style={{ color: "green" }}
                    class="fas fa-tree fa-3x"
                  ></i>
                  <p>
                    <Link to="/garden/uz">Bog'</Link>
                  </p>
                </div>
                <div className={styles.OurPragram}>
                  <i
                    id={styles.fontAwesomeIcon}
                    class="fas fa-rocket fa-3x"
                  ></i>
                  <p>
                    <Link to="/steam/uz">Steam</Link>
                  </p>
                </div>
                {/* <div className={styles.OurPragram}>
                  {" "}
                  <i id={styles.fontAwesomeIcon} class="fas fa-rocket fa-3x"></i>
                  <p>
                    <Link  to="/steam/uz">
                      Steam
                    </Link>
                  </p>
                </div> */}
                <div className={styles.OurPragram}>
                  {" "}
                  <i
                    id={styles.fontAwesomeIcon}
                    style={{ color: "#C68B59" }}
                    class="fas fa-birthday-cake fa-3x"
                  ></i>
                  <p>
                    <Link to="/cooking/uz">Shirinlik</Link>
                  </p>
                </div>
                <div className={styles.OurPragram}>
                  <i
                    id={styles.fontAwesomeIcon}
                    style={{ color: "#F6F6F6" }}
                    class="fas fa-book-open fa-3x"
                  ></i>
                  <p>
                    <Link to="/pedagogy/uz">Ta'lim</Link>
                  </p>
                </div>
              </div>
            </div>
           <div>
           <Container fluid>
              <Row>
                <Col lg={12} className={styles.tourCard}>
                  {/* <button>Turni rejalashtirish</button> */}
                  <Button className={styles.ButtonMenuHeadUnder} danger>
                    Turni rejalashtirish
                  </Button>
                </Col>
              </Row>
            </Container>
           </div>
            <div className={styles.second}>
              <div>
                <Container fluid>
                  <div className={styles.TourCardItem}>
                    <div className={styles.ImgItem1}>
                      <img src={imgDegre1} />
                    </div>
                    <div className={styles.TextItem1}>
                      <div className={styles.TextItemHr}></div>
                      <h1>Mehribon va tarbiyalovchi muhit</h1>
                      <p>
                        Flamingo orolidagi ta'lim o'qituvchilar, ota-onalar va
                        o'quvchilar mehribon va mehribon, ilmiy jihatdan boy
                        muhitda hamkorlik qiladigan go'zal raqsga o'xshaydi. Har
                        bir talabaning o'ziga xos kuchli, zaif tomonlari va
                        sovg'alari bizni katta va kichik yangi marralarni
                        birgalikda nishonlash paytida qabul qilinadi va
                        qo'llab-quvvatlanadi.
                      </p>
                      <p>
                        Flamingo orolidagi ta'lim o'qituvchilar, ota-onalar va
                        o'quvchilar mehribon va mehribon, ilmiy jihatdan boy
                        muhitda hamkorlik qiladigan go'zal raqsga o'xshaydi. Har
                        bir talabaning o'ziga xos kuchli.
                      </p>
                      <br />
                      <span>
                        <Link
                          to="/loving/uz"
                          className={styles.ButtonInfoForText}
                          style={{ color: "white" }}
                        >
                          Batafsil
                        </Link>
                      </span>
                    </div>
                  </div>
                </Container>
              </div>
              <div>
                <Container fluid>
                  <div className={styles.TourCardItem}>
                    <div className={styles.TourCardItem2Text}>
                      <h1>Ajoyib / qiziquvchanlik</h1>
                      <div className={styles.TextItemHr}></div>

                      <p>
                        Young children are born with an innate curiosity of the
                        world around them. Flamingo nurtures this natural wonder
                        and joy for learning. Our learning activities integrate
                        wonder and curiosity on a daily basis. Searching for
                        worms and building a house for a beetle are monumental
                        moments in a child’s day! We nurture young perspectives
                        to embrace and support inquiry and discovery.
                      </p>
                      <span>
                        <Link
                          to="/wonder/uz"
                          className={styles.ButtonInfoForText}
                          style={{ color: "white" }}
                        >
                          Batafsil
                        </Link>
                      </span>
                    </div>
                    <div className={styles.TourCardItem2Img}>
                      <img src={imgDegre2} />
                    </div>
                  </div>
                </Container>
              </div>
              <div>
              <Dashboardnews />

              </div>
              <div>
                <Container fluid>
                  <div className={styles.TourCardItem}>
                    <div className={styles.TourCardItem3Text}>
                      <div className={styles.TextItemHr}></div>

                      <h1>G'ayrat. Nishon. Etakchilik</h1>

                      <p>
                        Young children are born with an innate curiosity of the
                        world around them. Flamingo nurtures this natural wonder
                        and joy for learning. Our learning activities integrate
                        wonder and curiosity on a daily basis. Searching for
                        worms and building a house for a beetle are monumental
                        moments in a child’s day! We nurture young perspectives
                        to embrace and support inquiry and discovery.
                      </p>
                    </div>
                    <div className={styles.TourCardItem3Img}>
                      <div className={styles.TourCardItem3ImgItem}>
                        <div className={styles.TourCardItem3ImgItem1}>
                          <img src={qabul} />
                        </div>
                        <div className={styles.TourCardItem3ImgItem2}>
                          <img src={qabul1} />
                        </div>
                      </div>
                      <div className={styles.TourCardItem3ImgItem}>
                        <div className={styles.TourCardItem3ImgItemA}>
                          <img src={qabul3} />
                        </div>
                        <div className={styles.TourCardItem3ImgItemB}>
                          <p>
                            <b>Bizning Imkoniyatlar:</b>Our learning activities
                            integrate wonder and curiosity on a daily basis.
                            Searching for worms and building a house for a
                            beetle are monumental moments in a child’s day! We
                            nurture young perspectives to embrace and support
                            inquiry and discovery.
                          </p>
                          <span>
                            <Link
                              to="/loving/uz"
                              className={styles.ButtonInfoForText}
                              style={{ color: "white" }}
                            >
                              Batafsil
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
              <div>
              <Dashboardtadbir />

              </div>

              <div>
                <Container fluid>
                  <div className={styles.TourCardItem4}>
                    <div className={styles.TourCardItem4Head}>
                      <div
                        style={{ marginBottom: "2%" }}
                        className={styles.TextItemHr}
                      ></div>
                      <h2>
                        {" "}
                        Ota -onalar va Bolalar uchun Bolalarning xavfsizligi va
                        salomatligi to'g'risida ma'lumot!
                      </h2>
                    </div>
                    <div className={styles.TourCardItem4Body}>
                      <div className={styles.TourCardItem4Img}>
                        <img src={ChildImg} />
                      </div>
                      <div className={styles.TourCardItem4Text}>
                        <p>
                          <b>B.C</b> Flamingo orolidagi ta'lim o'qituvchilar,
                          ota-onalar va o'quvchilar mehribon va mehribon, ilmiy
                          jihatdan boy muhitda hamkorlik qiladigan go'zal raqsga
                          o'xshaydi. Har bir talabaning o'ziga xos kuchli, zaif
                          tomonlari va sovg'alari bizni katta va kichik yangi
                          marralarni birgalikda nishonlash paytida qabul
                          qilinadi va qo'llab-quvvatlanadi.{" "}
                        </p>
                        <p>
                          <ul>
                            <li>
                              {" "}
                              Aloqa o'rnatadi va aniq umidlar va maqbul xulq
                              -atvorni mustahkamlaydi va iqlim va o'zaro hurmat
                              va mas'uliyatni ta'minlaydi
                            </li>
                            <li> Modullarni o'rgatadi va rag'batlantiradi</li>
                            <li> Ijtimoiy mas'uliyatli xatti -harakatlar</li>
                            <li>
                              {" "}
                              Muammolarni tinch yo'l bilan hal qilish va
                              talabalarga bir -biriga yordam berishga harakat
                              qilish
                            </li>
                            <li>
                              {" "}
                              Shafqatsizlik va himoyalanish va inson huquqlariga
                              katta ahamiyat bering{" "}
                            </li>
                          </ul>
                        </p>
                        <span>
                          <Link
                            to="/loving/uz"
                            className={styles.ButtonInfoForText}
                            style={{ color: "white" }}
                          >
                            Batafsil
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>

           
            </div> 
            <div style={{ padding: "10px 0 30px" }}>
              <h1 className={styles.sarlavha}> Bizning hamkorlarimiz</h1>
              <div className={styles.AnimationPartnerOn}></div>
              <div
                className={styles.sliderHomiy}
                style={{ backgroundColor: "white" }}
              >
                <Carousel
                  responsive={responsive}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  infinite={true}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://president.uz/oz" target="_blank">
                        <img alt="" src={school} />
                      </a>
                    </div>
                    <p>
                      O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://www.gov.uz/uz" target="_blank">
                        <img alt="" src={her2} />
                      </a>
                    </div>
                    <p>O'zbekiston Respublikasining Hukumat portali</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://lex.uz/" target="_blank">
                        <img alt="" src={her3} />
                      </a>
                    </div>
                    <p>
                      O'zbekiston Respublikasi qonun hujjatlari milliy bazasi
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://my.gov.uz/oz" target="_blank">
                        <img alt="" src={her4} />
                      </a>
                    </div>
                    <p>Interaktiv davlat xizmatlarining Yagona portali</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://www.uzedu.uz/" target="_blank">
                        <img alt="" src={her5} />
                      </a>
                    </div>
                    <p>O'zbekiston Respublikasi xalq ta'limi vazirligi</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://ittower.uz/" target="_blank">
                        <img alt="" src={her6} style={{ width: "100%" }} />
                      </a>
                    </div>
                    <p>IT Tower firmasi </p>
                  </div>
                </Carousel>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
