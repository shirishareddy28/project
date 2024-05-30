import { FunctionComponent } from "react";
import styles from "./Testimonials.module.css";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonials, className].join(" ")}>
      <div className={styles.testimonialSlider}>
        <div className={styles.testimonialCard}>
          <div className={styles.testimonialVideo}>
            <div className={styles.video}>
              <img
                className={styles.tabishFormalPhoto11}
                alt=""
                src="/tabish-formal-photo-1-1@2x.png"
              />
              <img
                className={styles.playCircleFillIcon}
                loading="lazy"
                alt=""
                src="/playcirclefill.svg"
              />
            </div>
            <div className={styles.testimonialDetails}>
              <div className={styles.testimonial}>
                <div className={styles.divallTestimonialsBoxNamParent}>
                  <div className={styles.divallTestimonialsBoxNam}>
                    <img
                      className={styles.avatarOfTeam}
                      loading="lazy"
                      alt=""
                      src="/avatar-of-team@2x.png"
                    />
                    <div className={styles.span}>
                      <b className={styles.heading4}>Tabish khan</b>
                    </div>
                  </div>
                  <h1 className={styles.symbol}></h1>
                </div>
                <div className={styles.p}>
                  <p className={styles.osumaresExpertiseIn}>
                    Osumare's expertise in pharma marketing is unparalleled.
                    Their strategies helped us navigate complex regulations
                    while driving remarkable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonialNavigation}>
          <div className={styles.testimonialScrollButtons}>
            <img
              className={styles.scrollButtionIcon}
              loading="lazy"
              alt=""
              src="/scroll-buttion.svg"
            />
            <img
              className={styles.scrollButtionIcon1}
              alt=""
              src="/scroll-buttion-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
