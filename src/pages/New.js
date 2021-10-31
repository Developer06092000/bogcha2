import React, { Component } from "react";
import news1 from "../img/kinder6.png";
import styles from "../css/news.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PuffLoader from "react-spinners/PuffLoader";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MdOutlineDateRange } from "react-icons/md";
import { getBogcha } from "../host/Config";
export default class New extends Component {
  state = {
    loader: true,
    yangilik: [],
  };

  getBogchas = () => {
    getBogcha()
      .then((res) => {
        this.setState({
          yangilik: res.data.yangilik,
        });
        console.log("ThisDashboard", res.data.yangilik);
        setInterval(() => {
          this.setState({
            loader: false,
          });
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getBogchas();
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
                  {this.state.yangilik.map((item) => {
                    return (
                      <div key={item.id} className={styles.CardGroupNew}>
                        <div className={styles.CardGroupNewImg}>
                          <img src={item.image} />
                        </div>
                        <div className={styles.CardGroupNewText}>
                          <p>
                            <i>
                              <MdOutlineDateRange />
                            </i>
                            <i>{item.date}</i>
                          </p>
                          <p>{item.title}</p>
                          <p>{item.text}</p>
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
