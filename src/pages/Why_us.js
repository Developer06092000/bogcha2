import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../css/about_us.module.css'
import why1 from '../img/Whyus2.jpg'
import why2 from '../img/whyus3.jpg'
import PuffLoader from "react-spinners/PuffLoader";
import Navbar from './Navbar'
import Footer from './Footer'


export default class Why_us extends Component {
  state={
    loader:true
}
componentDidMount() {
  setInterval(()=>{
      this.setState({
          loader:false
      })
  },2000)
}
    render() {
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 993 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 992, min: 769 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 768, min: 567 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 566, min: 0 },
          items: 1
        }
      }
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
                <div className={styles.header}>
                  <Navbar />
                  <Carousel
                    className={styles.sliderHeader}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3000}
                    keyBoardControl={false}
                    showDots={false}
                  >
                    <div>
                      <img src={why1} className={styles.headerImage} />
                    </div>
                    <div>
                      <img src={why2} className={styles.headerImage} />
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
                        o'quvchilar mehribon va mehribon, ilmiy jihatdan boy
                        muhitda hamkorlik qiladigan go'zal raqsga o'xshaydi
                      </p>
                    </div>
                    <div className={styles.HeaderMenuItemBox3}>
                      <p>Ma'lumot Uchun </p>
                      <p>Bog'lanish </p>
                    </div>
                  </div>
                </div>
                  <Container>
                    <body>
                      <div className={styles.body}>
                        <div className={styles.title}>
                          <h1>Nega biz</h1>
                          <div className={styles.AnimationUnderNews1}></div>
                          <div className={styles.AnimationUnderNews2}></div>
                        </div>
                        <div className={styles.text}>
                          <p>
                            Flamingoning talabalari juda yaxshi ko'rishadi. Biz
                            o'zimizni bolalar, o'qituvchilar va ma'murlardan
                            iborat g'amxo'r o'quv jamoasini yaratishga
                            bag'ishlaymiz. Bizning ajoyib o'qituvchilar jamoasi
                            sizning kichkintoyingiz bilan abadiy aloqada bo'ladi
                            va uni yulduzlarga intilishga undaydi. Bizning
                            g'amxo'r ma'murlarimiz mijozlarga ajoyib xizmat
                            ko'rsatishadi, chunki mehmondo'stlik biz uchun juda
                            muhimdir. Biz har kuni ertalab / kechqurun
                            oilangizni maktabimizga qabul qilamiz va sizga
                            yordam kerak bo'lsa, shaxsiy narsalaringiz bilan
                            yordam beramiz.
                          </p>
                          <br />
                        </div>
                      </div>
                    </body>
                  </Container>

                <Footer />
              </div>
            )}
          </div>
        );
    }
}
