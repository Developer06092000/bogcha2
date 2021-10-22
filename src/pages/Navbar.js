import React, { Component } from "react";
import styles from "../css/Navbar.module.css";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
  FaInstagramSquare,
  FaFacebookSquare,
  FaFacebook,
} from "react-icons/fa";
import rasm1 from "../img/BrandKinder2.png";
import rasm5 from "../img/BrandKinder2.png";
// import rasm1 from "../img/ftr-logo.png";
// import rasm5 from "../img/logo-dark.png";
import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./nav.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { AiOutlineClose } from "react-icons/ai";
export default class Navbar extends Component {
  state = {
    nav: false,
    open: false,
    close: false,
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
  componentDidMount() {
    window.addEventListener("scroll", this.change);
  }
  handleClick = (e) => {
    console.log("click ", e);
  };
  render() {
    const { SubMenu } = Menu;
    return (
      <div>
        <div className={styles.one}>
          <div className={this.state.nav ? styles.nav1_active : styles.nav1}>
            <div className={this.state.nav ? styles.logo1 : styles.logo}>
              {this.state.nav ? <img src={rasm5} /> : <img src={rasm1} />}
              <div className={styles.navbar}>
                <span>
                  <Link to="/dashboard/uz">
                    <FaHome style={{ color: "#4587EB", fontSize: "23px" }} />
                  </Link>
                </span>
                <span style={{ fontSize: "25px" }}>|</span>
                <span className={styles.sub1}>
                  <Link to="/bizhaqimizda/uz">Bizl haqimizda</Link>
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
                    <Link to="/tarbiyachilar/uz">Tarbiyalovchilar</Link>
                  </p>
                  <p>
                    <Link to="/oshxona/uz">Oshxona</Link>
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
                  <a href="tel:+998335093874">
                    <FaPhoneAlt
                      style={{ color: "#4587EB", fontSize: "18px" }}
                    />
                  </a>
                </span>
                <span>
                  <a href="http://t.me/Karshiyeva_N">
                    <FaTelegramPlane
                      style={{ color: "#4587EB", fontSize: "23px" }}
                    />
                  </a>
                </span>
                <span>
                  <a href="http://t.me/Karshiyeva_N">
                    <FaInstagram
                      style={{ color: "#4587EB", fontSize: "23px" }}
                    />
                  </a>
                </span>
                <span>
                  <a href="http://t.me/Karshiyeva_N">
                    <FaFacebook
                      style={{ color: "#4587EB", fontSize: "23px" }}
                    />
                  </a>
                </span>
                {/* <Link to="/login">
                  <button
                    className={this.state.nav ? styles.btn1 : styles.btn2}
                  >
                    Kirish
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.second}>
          <div className={this.state.nav ? styles.nav1_active : styles.nav1}>
            <div className={this.state.nav ? styles.logo1 : styles.logo}>
              {this.state.nav ? <img src={rasm5} /> : <img src={rasm1} />}
              <div
                className={this.state.nav ? styles.openNav1 : styles.openNav}
              >
                <FaBars
                  onClick={this.openNav}
                  style={{ color: "#A2D2FF", fontSize: "30px" }}
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
                    <Menu.Item key="1" style={{ backgroundColor: "#A2D2FF" }}>
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
                      style={{ backgroundColor: "#A2D2FF", color: "white" }}
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
                          <Link to="/nimauchunbiz/uz">Nima uchun biz</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                          <Link to="/rahbariyat/uz">Rahbariyat</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                          <Link to="/tarbiyachilar/uz">Tarbiyalovchilar</Link>
                        </Menu.Item>
                        
                        <Menu.Item key="7">
                          <Link to="/manzil/uz">Manzil</Link>
                        </Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title="Dasturlar"
                      style={{ color: "white" }}
                    >
                      {" "}
                      <Menu.ItemGroup
                        style={{ borderTop: "3px solid rgba(0,0,0,0.4)" }}
                      >
                        <Menu.Item key="8">
                          <Link to="/dasturlar/uz">Dasturlar</Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                          <Link to="/dastur_1/uz">1-dastur</Link>
                        </Menu.Item>
                        <Menu.Item key="10">
                          <Link to="/dastur_2/uz">2-dastur</Link>
                        </Menu.Item>
                        <Menu.Item key="11">
                          <Link to="/dastur_3/uz">3-dastur</Link>
                        </Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item
                      key="12"
                      style={{ color: "white", backgroundColor: "#A2D2FF" }}
                    >
                      <Link to="/curriculm/uz" style={{ color: "white" }}>
                        Qabul
                      </Link>
                    </Menu.Item>
                    <Menu.Item
                      key="13"
                      style={{ color: "white", backgroundColor: "#A2D2FF" }}
                    >
                      <Link style={{ color: "white" }} to="/yangiliklar/uz">
                        Yangiliklar
                      </Link>
                    </Menu.Item>
                    <Menu.Item
                      key="14"
                      style={{ color: "white", backgroundColor: "#A2D2FF" }}
                    >
                      <Link style={{ color: "white" }} to="/tadbirlar/uz">
                        Tadbirlar
                      </Link>
                    </Menu.Item>
                    {/* <Menu.Item
                      key="12"
                      style={{ color: "white", backgroundColor: "#F76B6A" }}
                    >
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          color: "#F76B6A",
                          borderRadius: "25px",
                          padding: "10px 30px",
                        }}
                      >
                        <Link
                          style={{ color: "#F76B6A", fontWeight: "800" }}
                          to="/login"
                        >
                          Kirish
                        </Link>
                      </button>
                    </Menu.Item> */}
                    <Menu.Item>
                      <span>
                        <a href="tel:+998335093874">
                          <FaPhoneAlt
                            style={{ color: "white", fontSize: "18px" }}
                          />
                        </a>
                      </span>
                      <span>
                        <a href="http://t.me/Karshiyeva_N">
                          <FaTelegramPlane
                            style={{
                              color: "white",
                              fontSize: "23px",
                              marginLeft: "10px",
                            }}
                          />
                        </a>
                      </span>
                      <span>
                        <a href="http://t.me/Karshiyeva_N">
                          <FaInstagram
                            style={{
                              color: "white",
                              fontSize: "23px",
                              marginLeft: "10px",
                            }}
                          />
                        </a>
                      </span>
                      <span>
                        <a href="http://t.me/Karshiyeva_N">
                          <FaFacebook
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
    );
  }
}
