import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/Login.module.css";
import "../css/login.css";
import PacmanLoader from "react-spinners/PacmanLoader";
import rasm5 from "../img/logo-dark.png";
import { Link } from "react-router-dom";
import { BsFillTriangleFill } from "react-icons/bs";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Menu } from "antd";
import "antd/dist/antd.css";
export default function Login() {
  let history = useHistory();
  const [loader, setLoader] = useState(true);
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  const [In, setIn] = React.useState(false);
  const [item, setLog] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [signpassword, setSignPassword] = React.useState("");
  const [signusername, setSignUsername] = React.useState("");
  const [signmail, setSignMail] = React.useState("");
  const [signnumber, setsignnumber] = React.useState("");

  const Ruyhat = () => {
    setIn(false);
  };
  const Kirish = () => {
    setIn(true);
  };

  const Registr = () => {
    setLog(true);
  };
  const Enter = () => {
    setLog(false);
  };

  const handleChangUser = (event) => {
    setUsername(event.target.value);
  };
  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeSignUser = (event) => {
    setSignUsername(event.target.value);
  };
  const handleChangeSignMail = (event) => {
    setSignMail(event.target.value);
  };
  const handleChangeSignPass = (event) => {
    setSignPassword(event.target.value);
  };
  const handleChangeSignNum = (event) => {
    setsignnumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(event);
    //Send FullInformation person about
    console.log(
      "username=",
      username,
      "; password=",
      password,
      "; mail=",
      signmail,
      "; number=",
      signnumber,
      "; parol=",
      signpassword,
      "; newname=",
      signusername
    );
  };
  const change = () => {
    if (window.scrollY >= 200) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  const login = () => {
    var username = document.getElementById("formBasicEmail").value;
    var password = document.getElementById("formBasicPassword").value;
    if (username == "jamshid" && password == "jamshid") {
      history.push("/educator");
    } else {
    }
  };
  const { SubMenu } = Menu;
  const openNav = () => {
    setOpen(true);
  };
  const closeNav = () => {
    setOpen(false);
  };
  const handleClick = (e) => {
    console.log("click ", e);
  };
  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 2000);
    window.addEventListener("scroll", change);
  }, []);
  return (
    <div>
      {loader ? (
        <div className={styles.loader}>
          <PacmanLoader size={20} color={"#FF8080"} loading={loader} />
        </div>
      ) : (
        <div>
          <div className={styles.one}>
            <div className={nav ? styles.nav1_active : styles.nav1}>
              <div className={nav ? styles.logo1 : styles.logo}>
                {nav ? <img src={rasm5} /> : <img src={rasm5} />}
                <div className={styles.navbar}>
                  <span>
                    <Link to="/dashboard/uz">
                      <FaHome style={{ color: "#4587EB", fontSize: "23px" }} />
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
                  <Link to="/login">
                    <button className={nav ? styles.btn1 : styles.btn2}>
                      Kirish
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.second}>
            <div className={nav ? styles.nav1_active : styles.nav1}>
              <div className={nav ? styles.logo1 : styles.logo}>
                {nav ? <img src={rasm5} /> : <img src={rasm5} />}
                <div className={nav ? styles.openNav1 : styles.openNav}>
                  <FaBars
                    onClick={openNav}
                    style={{ color: "#A2D2FF", fontSize: "30px" }}
                  />
                </div>
                <div className={open ? styles.navWrapper1 : styles.navWrapper}>
                  <div className={styles.clicknav}>
                    <Menu
                      onClick={handleClick}
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
                            <Link to="/bizningtarix/uz">Bizning tarix</Link>
                          </Menu.Item>
                          <Menu.Item key="3">
                            <Link to="/nimauchunbiz/uz">Nima uchun biz</Link>
                          </Menu.Item>
                          <Menu.Item key="4">
                            <Link to="/rahbariyat/uz">Rahbariyat</Link>
                          </Menu.Item>
                          <Menu.Item key="4">
                            <Link to="/tarbiyachilar/uz">Tarbiyachilar</Link>
                          </Menu.Item>
                          <Menu.Item key="5">
                            <Link to="/galereya/uz">Galereya</Link>
                          </Menu.Item>
                          <Menu.Item key="6">
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
                          <Menu.Item key="7">
                            <Link to="/dastur_1/uz">1-dastur</Link>
                          </Menu.Item>
                          <Menu.Item key="8">
                            <Link to="/dastur_2/uz">2-dastur</Link>
                          </Menu.Item>
                          <Menu.Item key="9">
                            <Link to="/dastur_3/uz">3-dastur</Link>
                          </Menu.Item>
                        </Menu.ItemGroup>
                      </SubMenu>
                      <Menu.Item
                        key="10"
                        style={{ color: "white", backgroundColor: "#A2D2FF" }}
                      >
                        <Link to="/curriculm/uz" style={{ color: "white" }}>
                          Qabul
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        key="11"
                        style={{ color: "white", backgroundColor: "#A2D2FF" }}
                      >
                        <Link style={{ color: "white" }} to="/yangiliklar/uz">
                          Yangiliklar
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        key="12"
                        style={{ color: "white", backgroundColor: "#A2D2FF" }}
                      >
                        <Link style={{ color: "white" }} to="/tadbirlar/uz">
                          Tadbirlar
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        key="12"
                        style={{ color: "white", backgroundColor: "#A2D2FF" }}
                      >
                        <button
                          style={{
                            border: "none",
                            backgroundColor: "white",
                            color: "#4587EB",
                            borderRadius: "25px",
                            padding: "10px 30px",
                          }}
                        >
                          <Link
                            style={{ color: "#4587EB", fontWeight: "800" }}
                            to="/login/uz"
                          >
                            Kirish
                          </Link>
                        </button>
                      </Menu.Item>
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
                      </Menu.Item>
                    </Menu>
                    <div className={styles.close}>
                      <AiOutlineClose
                        onClick={closeNav}
                        style={{ fontSize: "30px", color: "white" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Container fluid className={styles.bodyl}>
            {/* ----------------------------------- */}
            <div className="Registratsiya">
              {item ? (
                <div className="login">
                  <h3 className="header">Kirish</h3>
                  <form onSubmit={handleSubmit}>
                    <label className="inputPerson">
                      <input
                        className="inputtext"
                        name="Username"
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={handleChangUser}
                        required
                      />
                    </label>
                    <label className="inputPerson">
                      <input
                        className="inputpass"
                        name="Password"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleChangePass}
                        required
                      />
                    </label>

                    <input
                      className="LogInPriceLog"
                      type="submit"
                      value="Kirish"
                    />
                  </form>

                  <div className="footerTitleLog">
                    <p>Ruyxatdan o'tmadingizmi? </p>
                    <p>
                      {" "}
                      <strong onClick={Enter} className="linkLog">
                        SignUp
                      </strong>
                    </p>
                  </div>
                </div>
              ) : (
                <div className="signup">
                  <h1 className="header">Ruyxatdan O'tish!</h1>
                  <form onSubmit={handleSubmit}>
                    <label className="inputPersonSign">
                      <input
                        type="text"
                        value={signusername}
                        placeholder="Full Name"
                        onChange={handleChangeSignUser}
                        required
                      />
                    </label>
                    <label className="inputPersonSign">
                      <input
                        type="email"
                        value={signmail}
                        placeholder="Email"
                        onChange={handleChangeSignMail}
                        required
                      />
                    </label>
                    <label className="inputPersonSign">
                      <input
                        type="password"
                        value={signpassword}
                        placeholder="Password"
                        onChange={handleChangeSignPass}
                        required
                      />
                    </label>
                    <label className="inputPersonSign">
                      <input
                        type="text"
                        value={signnumber}
                        placeholder="Number"
                        onChange={handleChangeSignNum}
                        required
                      />
                    </label>

                    <input
                      className="LogInPriceSign"
                      type="submit"
                      value="Kirish"
                    />
                  </form>
                  <div className="footerTitleSign">
                    <p>Ruyxatdan o'tkanmisiz ? </p>
                    <p>
                      {" "}
                      <strong onClick={Registr} className="linkLog">
                        Log in
                      </strong>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ----------------------------------- */}

            {/* <Row>
              <Col lg={12} className={styles.text}>
                <h1>Kirish</h1>
                <div className={styles.form}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label
                        style={{
                          color: "white",
                          fontSize: "17px",
                          fontWeight: "600",
                        }}
                      >
                        E-mail pochtangizni kiriting
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label
                        style={{
                          color: "white",
                          fontSize: "17px",
                          fontWeight: "600",
                        }}
                      >
                        Parolni kiriting
                      </Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                    <Button
                      onClick={login}
                      type="submit"
                      style={{
                        fontWeight: "600",
                        backgroundColor: "#4587EB",
                        border: "none",
                        marginTop: "30px",
                        width: "100%",
                      }}
                    >
                      Kirish
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row> */}
          </Container>
          <Footer />
        </div>
      )}
    </div>
  );
}
