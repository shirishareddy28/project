import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <footer className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerInfoChild} />
          <div className={styles.footerDetails}>
            <div className={styles.footerBrand}>
              <div className={styles.osamareWhiteLogo}>
                <img
                  className={styles.osumareLogo0123}
                  loading="lazy"
                  alt=""
                  src="/osumare-logo01-2-3@2x.png"
                />
              </div>
              <p className={styles.theBestDigital}>
                The best digital marketing agency in Pune with a proven track
                record of consistently delivering quality service.
              </p>
            </div>
            <div className={styles.footerAddress}>
              <b className={styles.address}>Address</b>
              <p className={styles.surveyNo43}>
                Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                Pune-14, Maharastra, India.
              </p>
            </div>
            <div className={styles.footerContact}>
              <b className={styles.contacts}>Contacts</b>
              <div className={styles.conatctInfo}>
                <div className={styles.contactIcons}>
                  <img
                    className={styles.mailFillIcon}
                    loading="lazy"
                    alt=""
                    src="/mailfill.svg"
                  />
                  <a
                    className={styles.helloosumarein}
                    href="mailto:%68ello@osum%61re%2Ein"
                    target="_blank"
                  >
                    hello@osumare.in
                  </a>
                </div>
                <div className={styles.contactIcons1}>
                  <img
                    className={styles.phoneFillIcon}
                    alt=""
                    src="/phonefill.svg"
                  />
                  <div className={styles.div}>+91 8459 8762 26</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerNavigation}>
            <b className={styles.menu}>Menu</b>
            <div className={styles.navigationLinks}>
              <div className={styles.home}>Home</div>
              <div className={styles.about}>About</div>
              <div className={styles.services}>Services</div>
              <div className={styles.work}>Work</div>
              <div className={styles.blog}>Blog</div>
              <div className={styles.career}>Career</div>
            </div>
          </div>
          <div className={styles.footerSocial}>
            <b className={styles.social}>Social</b>
            <div className={styles.icons}>
              <div className={styles.pinterestIcons}>
                <img
                  className={styles.pinterestFillIcon}
                  loading="lazy"
                  alt=""
                  src="/pinterestfill.svg"
                />
                <img
                  className={styles.pinterestFillIcon1}
                  alt=""
                  src="/pinterestfill-1.svg"
                />
              </div>
              <img
                className={styles.pinterestFillIcon2}
                alt=""
                src="/pinterestfill-2.svg"
              />
              <img
                className={styles.pinterestFillIcon3}
                alt=""
                src="/pinterestfill-3.svg"
              />
              <img
                className={styles.whatsappFillIcon}
                loading="lazy"
                alt=""
                src="/whatsappfill.svg"
              />
              <img
                className={styles.whatsappFillIcon1}
                alt=""
                src="/whatsappfill-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.osumareAllRights}>
            © 2023 Osumare. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
