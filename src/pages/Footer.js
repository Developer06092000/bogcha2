import React, { Component } from "react";
import aloqa1 from "../img/footer-address.png";
import aloqa2 from "../img/footer-fax.png";
import aloqa3 from "../img/footer-mail.png";
import aloqa4 from "../img/footer-phone.png";
import styles from "../css/Footer.module.css";
import style from "../css/Footer2.module.css";
import rasm1 from "../img/ftr-logo.png";
import { Container } from "react-bootstrap";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";
import { Button } from "antd";

import { IoIosCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { FaPlaceOfWorship, FaYoutube } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div className={style.FooterHeadMenu}>
        <div className={style.Imkoniyat}>
          <div className={style.Imkoniyat1}>
            <p className={style.Imkoniyat2}>
              Biz sizga <b>qulaylik va imkoniyatlarni </b>yaratamiz
            </p>
            <p>
              <Button id={style.ConnectButton}>
                <FaTelegramPlane className={style.ConnectTelgramIcon} />
                Bog'lanish
              </Button>
            </p>
          </div>
        </div>
        <div className={style.FooterMenu}>
          <Container fluid>
            <div className={style.FooterMenuIn}>
              <div className={style.FooterMenuItem}>
                <b>Biz bilan Bog'lanish</b>

                <p>
                  <IoIosCall className={style.iconsfroup} />
                  Ishonch telefonlari: +998(71)-777-77-77
                </p>
                <p>
                  <HiMail className={style.iconsfroup} />
                  Elektron Manzil: kindergarten@gmail.com
                </p>
                <p>
                  <FaPlaceOfWorship className={style.iconsfroup} />
                  <b>Manzil:</b>Toshkent shahar, Shayhontohur tumani, Qoraqamish
                  2/3, 45-uy.
                </p>
              </div>
              <div className={style.FooterMenuItem}>
                <p>
                  <a href="http://t.me/Karshiyeva_N">
                    <FaTelegramPlane className={style.iconsfroup} />
                    Telegram
                  </a>
                </p>
                <p>
                  <a href="http://t.me/Karshiyeva_N">
                    <FaInstagram className={style.iconsfroup} />
                    Instagram
                  </a>
                </p>
                <p>
                  <a href="http://t.me/Karshiyeva_N">
                    <FaYoutube className={style.iconsfroup} />
                    You Tube
                  </a>
                </p>
                <p>
                  <a href="http://t.me/Karshiyeva_N">
                    <FaFacebook className={style.iconsfroup} />
                    Facebook
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className={style.FooterToFooter}>
          <p>2021-It-Tower. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    );
  }
}
