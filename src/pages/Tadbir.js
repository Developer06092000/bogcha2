import React, { Component } from "react";
import news1 from "../img/kinder6.png";
import styles from "../css/news.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PuffLoader from "react-spinners/PuffLoader";
import { BsGeoAlt } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";

import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getBogcha } from "../host/Config";
export default class Tadbir extends Component {
  state = {
    loader: true,
    TadbirGet: [],
  };
  GetTadbir = () => {
    getBogcha()
      .then((res) => {
        this.setState({
          TadbirGet: res.data.tadbir,
        });
        console.log("ThisTadbir", res.data.tadbir);
        setInterval(() => {
          this.setState({
            loader: false,
          });
        }, 2000);
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.GetTadbir();
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
          <div style={{ pading: "1px 0px" }}>
            <div className={styles.newbg}>
              <Navbar />
            </div>
            <div className={styles.newsItem}>
              <div className={styles.newtitle}>
                <h1>So'nggi Tadbir</h1>
                <div
                  style={{ width: "80%", margin: "auto" }}
                  className={styles.AnimationUnderNews1}
                ></div>
                <div
                  style={{ width: "40%", margin: "auto", marginTop: "5px" }}
                  className={styles.AnimationUnderNews2}
                ></div>
              </div>

              <section className={styles.NewSection}>
                <Container>
                  {this.state.TadbirGet.map((item) => {
                    return (
                      <div key={item.id} className={styles.CardGroupTadbir}>
                        <div className={styles.CardGroupTadbirImg}>
                          <img src={item.image} />
                        </div>
                        <div className={styles.CardGroupTadbirText}>
                          <p>{item.name}</p>
                          <p>{item.text}</p>
                          <div>
                            <p>
                              <MdOutlineDateRange />
                              {item.date}
                            </p>

                            <p>
                              <BsGeoAlt />
                              {item.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
