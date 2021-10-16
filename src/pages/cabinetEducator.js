import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavbarKabinet from "./NavbarKabinet";
import Kids from "./kids";
import Rahbarlar from "./Rahbarlar";
import Teachers1 from "./Teachers1";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
} from "react-icons/fa";
import "../App.css";
import styles from "../css/navbarkids.module.css";
import PuffLoader from "react-spinners/PuffLoader";

import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  FieldBinaryOutlined ,
  LogoutOutlined 

} from "@ant-design/icons";
import Rahbariyat from "./Rahbariyat";
export default class CabinetEducator extends Component {
  state = {
    collapsed: false,
    loader: true,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
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
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BrowserRouter>
                <div
                  className={
                    this.state.collapsed ? styles.collapsed1 : styles.collapsed2
                  }
                >
                  <Button
                    type="primary"
                    onClick={this.toggleCollapsed}
                    style={{
                      marginBottom: 16,
                      marginTop: 10,
                      marginLeft:"20px",
                      backgroundColor: "transparent",
                      border: "1px solid green",
                    }}
                  >
                    {React.createElement(
                      this.state.collapsed
                        ? MenuUnfoldOutlined
                        : MenuFoldOutlined
                    )}
                  </Button>
                  <Menu
                    style={{ backgroundColor: "black" }}
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    className="Linkdashboard"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                  >
                    <Menu.Item
                      key="1"
                      icon={<PieChartOutlined style={{fontSize:'18px'}}/>}
                      style={{ color: "green", backgroundColor: "#A2D2FF" }}
                    >
                      <Link
                        to="/educator"
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        Dashboard
                      </Link>
                    </Menu.Item>
                    <SubMenu
                      key="sub1"
                      icon={
                        <MailOutlined
                          style={{
                            color: "green",
                            fontSize:'18px',
                          }}
                        />
                      }
                      style={{
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                      title="Xodimlar"
                    >
                      <Menu.Item
                        style={{ backgroundColor: "#A2D2FF", color: "#A2D2FF" }}
                        key="5"
                      >
                        <Link
                          to="/educator/rahbarlar"
                          style={{
                            color: "green",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          Rahbarlar
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        style={{ backgroundColor: "#A2D2FF", color: "#A2D2FF" }}
                        key="6"
                      >
                        <Link
                          to="/educator/tarbiyachilar"
                          style={{
                            color: "green",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          Tarbiyachilar
                        </Link>
                      </Menu.Item>
                    </SubMenu>
                    <Menu.Item
                      key="2"
                      icon={<DesktopOutlined style={{fontSize:'18px'}}/>}
                      style={{ color: "green", backgroundColor: "#A2D2FF" }}
                    >
                      <Link
                        to="/educator/kids"
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        O'quvchilar
                      </Link>
                    </Menu.Item>

                    <Menu.Item
                      icon={<LogoutOutlined style={{fontSize:'18px'}} />}
                      key="12"
                      style={{ color: "green", backgroundColor: "#A2D2FF" }}
                    >
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          color: "#1A73E8",
                          borderRadius: "10px",
                          padding: "10px 30px",
                        }}
                      >
                        <Link
                          to="/"
                          target="_parent"
                          style={{ color: "green", fontWeight: "800" }}
                        >
                          Chiqish
                        </Link>
                      </button>
                    </Menu.Item>
                  </Menu>
                </div>
                <Switch>
                  <Route exact path="/educator/rahbarlar">
                    <Rahbarlar />
                  </Route>
                  <Route exact path="/educator/tarbiyachilar">
                    <Teachers1 />
                  </Route>
                  <Route exact path="/educator/kids">
                    <Kids />
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        )}
      </div>
    );
  }
}
