import { FunctionComponent } from "react";
import styles from "./ContentWrapper.module.css";

export type ContentWrapperType = {
  className?: string;
};

const ContentWrapper: FunctionComponent<ContentWrapperType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.contentColumnParent}>
        <div className={styles.contentColumn}>
          <div className={styles.headingParagraph}>
            <h1 className={styles.elevateRealEstateContainer}>
              <span className={styles.elevate}>{`Elevate `}</span>
              <b className={styles.realEstateSuccess}>Real Estate Success</b>
              <span className={styles.withOsumaresDigital}>
                {" "}
                with Osumare's Digital Expertise
              </span>
            </h1>
            <div className={styles.tailoredSolutionsFor}>
              Tailored Solutions for Thriving in the Digital Real Estate
              Landscape
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.largeButton}>
              <b className={styles.getStarted}>Get started</b>
              <img
                className={styles.customerService2FillIcon}
                alt=""
                src="/customerservice2fill.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.headerImageWrapper}>
          <div className={styles.headerImage}>
            <img
              className={styles.backgroundComplete1Icon}
              alt=""
              src="/backgroundcomplete-1@2x.png"
            />
            <img
              className={styles.forSalebroIcon}
              loading="lazy"
              alt=""
              src="/forsalebro.svg"
            />
            <div className={styles.weNeed}>{`We Need `}</div>
            <div className={styles.marketing}>Marketing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWrapper;
