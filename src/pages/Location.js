import React, { Component } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/location.module.css";
import rasm1 from "../img/rasm1.png";
import aloqa1 from "../img/aloqa1.png";
import aloqa2 from "../img/aloqa2.png";
import aloqa3 from "../img/aloqa3.png";
import aloqa4 from "../img/aloqa4.png";
import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";
import FloatingLabel from "react-bootstrap-floating-label";

import PuffLoader from "react-spinners/PuffLoader";
import rasm5 from "../img/BrandKinder2.png";
import { Link } from "react-router-dom";
import { BsFillTriangleFill } from "react-icons/bs";
import { Menu } from "antd";
import "antd/dist/antd.css";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
  FaFacebook,
  FaFax,
  FaNetworkWired,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { MdPlace } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { getBogcha } from "../host/Config";
import { url } from "../host/Host";
import { AiOutlineClose } from "react-icons/ai";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Location extends Component {
  state = {
    loader: true,
    nav: false,
    open: false,
    close: false,
    ManzilGet: [],
  };

  openNav = () => {
    this.setState({
      open: true,
    });
  };
  closeNav = () => {
    this.setState({
      open: false,
    });
  };
  handleClick = (e) => {
    console.log("click ", e);
  };
  change = () => {
    if (window.scrollY >= 200) {
      this.setState({
        nav: true,
      });
    } else {
      this.setState({
        nav: false,
      });
    }
  };
  LocationGet = () => {
    getBogcha()
      .then((res) => {
        this.setState({
          ManzilGet: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.LocationGet();
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
    window.addEventListener("scroll", this.change);
  }
  render() {
    const { SubMenu } = Menu;

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
          <div className={styles.BodyItemImg}>
            <div>
              <div className={styles.one}>
                <div
                  className={this.state.nav ? styles.nav1_active : styles.nav1}
                >
                  <div className={this.state.nav ? styles.logo1 : styles.logo}>
                    {this.state.nav ? (
                      <img src={url + this.state.ManzilGet.logo} />
                    ) : (
                      <img src={url + this.state.ManzilGet.logo} />
                    )}
                    <div className={styles.navbar}>
                      <span>
                        <Link to="/dashboard/uz">
                          <FaHome
                            style={{ color: "#4587EB", fontSize: "23px" }}
                          />
                        </Link>
                      </span>
                      <span style={{ fontSize: "25px" }}>|</span>
                      <span className={styles.sub1}>
                        <Link to="/bizhaqimizda/uz">Biz haqimizda</Link>
                      </span>
                      <div className={styles.subNav1}>
                        <span>
                          <BsFillTriangleFill className={styles.icon1} />
                        </span>
                        <p>
                          <Link to="/bizningtarix/uz">Bizning tarix</Link>
                        </p>
                        <p>
                          <Link to="/nimauchunbiz/uz">Nima uchun biz</Link>
                        </p>
                        <p>
                          <Link to="/rahbariyat/uz">Rahbariyat</Link>
                        </p>
                        <p>
                          <Link to="/tarbiyachilar/uz">Tarbiyachilar</Link>
                        </p>
                        <p>
                          <Link to="/oshxona/uz">Oshxona</Link>
                        </p>
                        <p>
                          <Link to="/galereya/uz">Galereya</Link>
                        </p>
                        <p>
                          <Link to="/manzil/uz">Manzil</Link>
                        </p>
                      </div>
                      <span style={{ fontSize: "25px" }}>|</span>
                      <span className={styles.sub2}>
                        <Link to="/dasturlar/uz">Dasturlar</Link>
                      </span>
                      <div className={styles.subNav2}>
                        <span>
                          <BsFillTriangleFill className={styles.icon2} />
                        </span>
                        <p>
                          <Link to="/dastur_1/uz">1-bosqich</Link>
                        </p>
                        <p>
                          <Link to="/dastur_2/uz">2-bosqich</Link>
                        </p>
                        <p>
                          <Link to="/dastur_3/uz">3-bosqich</Link>
                        </p>
                      </div>
                      <span style={{ fontSize: "25px" }}>|</span>
                      <span>
                        <Link to="/curriculm/uz">Qabul</Link>
                      </span>
                      <span style={{ fontSize: "25px" }}>|</span>
                      <span>
                        <Link to="/yangiliklar/uz">Yangiliklar</Link>
                      </span>
                      <span style={{ fontSize: "25px" }}>|</span>
                      <span>
                        <Link to="/tadbirlar/uz">Tadbirlar</Link>
                      </span>
                      <span style={{ marginLeft: "40px" }}>
                        <a href={this.state.ManzilGet.phone}>
                          <FaPhoneAlt
                            style={{ color: "#4587EB", fontSize: "18px" }}
                          />
                        </a>
                      </span>
                      <span>
                        <a href={this.state.ManzilGet.telegram}>
                          <FaTelegramPlane
                            style={{ color: "#4587EB", fontSize: "23px" }}
                          />
                        </a>
                      </span>
                      <span>
                        <a href={this.state.ManzilGet.instagram}>
                          <FaInstagram
                            style={{ color: "#4587EB", fontSize: "23px" }}
                          />
                        </a>
                      </span>
                      <span>
                        <a href={this.state.ManzilGet.facebook}>
                          <FaFacebook
                            style={{ color: "#4587EB", fontSize: "23px" }}
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.second}>
                <div
                  className={this.state.nav ? styles.nav1_active : styles.nav1}
                >
                  <div className={this.state.nav ? styles.logo1 : styles.logo}>
                    {this.state.nav ? (
                      <img src={url + this.state.ManzilGet.logo} />
                    ) : (
                      <img src={url + this.state.ManzilGet.logo} />
                    )}
                    <div
                      className={
                        this.state.nav ? styles.openNav1 : styles.openNav
                      }
                    >
                      <FaBars
                        onClick={this.openNav}
                        style={{
                          color: "#A2D2FF",
                          fontSize: "30px",
                        }}
                      />
                    </div>
                    <div
                      className={
                        this.state.open ? styles.navWrapper1 : styles.navWrapper
                      }
                    >
                      <div className={styles.clicknav}>
                        <Menu
                          onClick={this.handleClick}
                          style={{
                            width: 256,
                            backgroundColor: "#A2D2FF",
                            border: "none",
                            textAlign: "center",
                            fontSize: "18px",
                            marginTop: "100px",
                          }}
                          defaultSelectedKeys={["1"]}
                          defaultOpenKeys={["sub1"]}
                          mode="inline"
                        >
                          <Menu.Item
                            key="1"
                            style={{ backgroundColor: "#A2D2FF" }}
                          >
                            <span>
                              <Link to="/dashboard/uz">
                                <FaHome
                                  style={{ color: "white", fontSize: "23px" }}
                                />
                              </Link>
                            </span>
                          </Menu.Item>
                          <SubMenu
                            key="sub1"
                            title="Biz haqimizda"
                            style={{
                              backgroundColor: "#A2D2FF",
                              color: "white",
                            }}
                          >
                            <Menu.ItemGroup
                              key="g1"
                              style={{ borderTop: "3px solid rgba(0,0,0,0.4)" }}
                            >
                              <Menu.Item key="2">
                                <Link to="/bizhaqimizda/uz">Biz haqimizda</Link>
                              </Menu.Item>
                              <Menu.Item key="3">
                                <Link to="/bizningtarix/uz">Bizning tarix</Link>
                              </Menu.Item>
                              <Menu.Item key="4">
                                <Link to="/nimauchunbiz/uz">
                                  Nima uchun biz
                                </Link>
                              </Menu.Item>
                              <Menu.Item key="5">
                                <Link to="/rahbariyat/uz">Rahbariyat</Link>
                              </Menu.Item>
                              <Menu.Item key="6">
                                <Link to="/tarbiyachilar/uz">
                                  Tarbiyachilar
                                </Link>
                              </Menu.Item>
                              <Menu.Item key="7">
                                <Link to="/galereya/uz">Galereya</Link>
                              </Menu.Item>
                              <Menu.Item key="8">
                                <Link to="/manzil/uz">Manzil</Link>
                              </Menu.Item>
                            </Menu.ItemGroup>
                          </SubMenu>
                          <SubMenu
                            key="sub2"
                            title="Dasturlar"
                            style={{ color: "white" }}
                          >
                            <Menu.ItemGroup
                              style={{ borderTop: "3px solid rgba(0,0,0,0.4)" }}
                            >
                              <Menu.Item key="9">
                                <Link to="/dasturlar/uz">Dasturlar</Link>
                              </Menu.Item>
                              <Menu.Item key="10">
                                <Link to="/dastur_1/uz">1-dastur</Link>
                              </Menu.Item>
                              <Menu.Item key="11">
                                <Link to="/dastur_2/uz">2-dastur</Link>
                              </Menu.Item>
                              <Menu.Item key="12">
                                <Link to="/dastur_3/uz">3-dastur</Link>
                              </Menu.Item>
                            </Menu.ItemGroup>
                          </SubMenu>
                          <Menu.Item
                            key="10"
                            style={{
                              color: "white",
                              backgroundColor: "#A2D2FF",
                            }}
                          >
                            <Link to="/curriculm/uz" style={{ color: "white" }}>
                              Qabul
                            </Link>
                          </Menu.Item>
                          <Menu.Item
                            key="11"
                            style={{
                              color: "white",
                              backgroundColor: "#A2D2FF",
                            }}
                          >
                            <Link
                              style={{ color: "white" }}
                              to="/yangiliklar/uz"
                            >
                              Yangiliklar
                            </Link>
                          </Menu.Item>
                          <Menu.Item
                            key="12"
                            style={{
                              color: "white",
                              backgroundColor: "#A2D2FF",
                            }}
                          >
                            <Link style={{ color: "white" }} to="/tadbirlar/uz">
                              Tadbirlar
                            </Link>
                          </Menu.Item>
                          <Menu.Item
                            key="12"
                            style={{
                              color: "white",
                              backgroundColor: "#A2D2FF",
                            }}
                          >
                            <button
                              style={{
                                border: "none",
                                backgroundColor: "white",
                                color: "#A2D2FF",
                                borderRadius: "25px",
                                padding: "10px 30px",
                              }}
                            >
                              <Link
                                style={{ color: "#A2D2FF", fontWeight: "800" }}
                                to="/login"
                              >
                                Kirish
                              </Link>
                            </button>
                          </Menu.Item>
                          <Menu.Item>
                            <span>
                              <a href={this.state.ManzilGet.phone}>
                                <FaPhoneAlt
                                  style={{ color: "white", fontSize: "18px" }}
                                />
                              </a>
                            </span>
                            <span>
                              <a href={this.state.ManzilGet.telegram}>
                                <FaTelegramPlane
                                  style={{
                                    color: "white",
                                    fontSize: "23px",
                                    marginLeft: "10px",
                                  }}
                                />
                              </a>
                            </span>
                          </Menu.Item>
                        </Menu>
                        <div className={styles.close}>
                          <AiOutlineClose
                            onClick={this.closeNav}
                            style={{ fontSize: "30px", color: "white" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: "#FEF9EF" }}>
              <Container
                key={this.state.ManzilGet.id}
                className={styles.ContainerME}
              >
                <div className={styles.CardGroupLocation}>
                  <div className={styles.CardGroupItem}>
                    <p>
                      <MdPlace />
                    </p>
                    <p>Bizning Manzil</p>
                    <p>{this.state.ManzilGet.address}</p>
                  </div>
                  <div className={styles.CardGroupItem}>
                    <p>
                      <BsFillTelephoneFill />
                    </p>
                    <p>Telefon Raqam</p>
                    <p>
                      {this.state.ManzilGet.phone} <br />
                      {this.state.ManzilGet.phone}
                    </p>
                  </div>
                  <div className={styles.CardGroupItem}>
                    <p>
                      <FaFax />
                    </p>
                    <p>Fax:</p>
                    <p>{this.state.ManzilGet.phone}</p>
                  </div>
                  <div className={styles.CardGroupItem}>
                    <p>
                      <FaNetworkWired />
                    </p>
                    <a href={this.state.ManzilGet.email}>
                      <GoMail
                        style={{
                          color: "black",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                      />
                      Mail
                    </a>
                    <a href={this.state.ManzilGet.telegram}>
                      <FaTelegramPlane
                        style={{
                          color: "black",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                      />
                      Telegram
                    </a>
                    <a href={this.state.ManzilGet.facebook}>
                      <FaFacebook
                        style={{
                          color: "black",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                      />
                      Facebook
                    </a>
                    <a href={this.state.ManzilGet.instagram}>
                      <FaInstagram
                        style={{
                          color: "black",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                      />
                      Instagram
                    </a>
                  </div>
                </div>
                <div className={styles.LocationAndContact}>
                  <div className={styles.ContactInfo}>
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Emailni Kiriting"
                            className={styles.EnterEmail}
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                          <Form.Label>Ism</Form.Label>
                          <Form.Control
                            type="text"
                            className={styles.EnterEmail}
                            placeholder="Ismingizni Kiriting"
                          />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Example textarea</Form.Label>
                          <Form.Control
                            className={styles.EnterEmail}
                            as="textarea"
                            placeholder="Fikringizni Qoldiring"
                            rows={3}
                          />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Button
                          style={{ backgroundColor: "white" }}
                          className={styles.KiritishButton}
                        >
                          Kiritish
                        </Button>
                      </Row>
                    </Form>
                  </div>
                  <div className={styles.LocationInfo}>
                    <YMaps style={{ width: "100%", height: "100%" }}>
                      <Map
                        defaultState={{
                          center: [43.25690123934591, 64.88245105519029],
                          zoom: 6,
                        }}
                        width="100%"
                        height="100%"
                      >
                        <Placemark
                          geometry={[43.25690123934591, 64.88245105519029]}
                        />
                        <FullscreenControl options={{ float: "right" }} />
                        <GeolocationControl options={{ float: "left" }} />
                        <ZoomControl options={{ float: "right" }} />
                      </Map>
                    </YMaps>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        )}
      </div>
    );
  }
}
