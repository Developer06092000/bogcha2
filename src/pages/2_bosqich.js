import React, { Component } from "react";
import style from "../css/Steam.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import star from "../img/star.png";
import delivery from "../img/delivery.png";
import frame from "../img/frame.png";
import img1 from "../img/r2.jpg";
import img4 from "../img/r4.jpeg";
import img5 from "../img/r5.jpeg";
import styles from "../css/about_us.module.css";

import PuffLoader from "react-spinners/PuffLoader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {url} from '../host/Host'
import { getBogcha } from "../host/Config";
export default class Bosqich2 extends Component {
  state = {
    loader: true,
    Bosqich2Get:[],
  };
  GetBosqichTwo=()=>{
    getBogcha()
    .then((res)=>{
      this.setState({
        Bosqich2Get:res.data,
      })
    })
    .catch((err)=>{
      console.log(err);
    })

  }
  componentDidMount() {
    this.GetBosqichTwo()
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
      <div className={style.mat}>
        {this.state.loader ? (
          <div className={style.loader}>
            <PuffLoader
              className={style.loader1}
              size={100}
              color={"#2C0091"}
              loading={this.state.loader}
            />
            <p> Sayt Test Rejimida Ishlamoqda!</p>
          </div>
        ) : (
          <div>
            <div className={style.HeaderForBosqich}>
              <Navbar />
              <Carousel
                className={style.sliderHeader}
                responsive={responsive}
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                showDots={false}
              >
                <div>
                  <img src={img1} className={style.sliderImage} />
                </div>
                <div>
                  <img src={img4} className={style.sliderImage} />
                </div>
                <div>
                  <img src={img5} className={style.sliderImage} />
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
            <div className={style.BodyGroup1Bosqich}>
            <div className={style.BodyGroup1BosqichItem}>
                <h1>2-BOSQICH</h1>
                <div className={style.AnimationUnderNews1}></div>
                <div className={style.AnimationUnderNews2}></div>
              </div>
            

              <Container>
              <div className={style.LevelGroup}>
                  <div className={style.LevelItemImg}>
                    <img src={url + this.state.Bosqich2Get.program2_img} />
                  </div>
                  <div className={style.LevelItemText}>
                    <p>
                      <h1>2-Bosqich</h1>{" "}
                      <div className={style.AnimationUnderNews1}></div>
                    </p>

                    <p>{this.state.Bosqich2Get.program2}</p>
                  </div>
                </div>
              </Container>
            </div>

            <Footer />
          </div>
        )}
      </div>
    );
  }
}
