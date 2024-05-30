import { FunctionComponent } from "react";
import styles from "./ExpertiseContainer.module.css";

export type ExpertiseContainerType = {
  className?: string;
};

const ExpertiseContainer: FunctionComponent<ExpertiseContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.expertiseContainer, className].join(" ")}>
      <div className={styles.expertiseGridParent}>
        <div className={styles.expertiseGrid}>
          <div className={styles.caseStudyTitle}>
            <div className={styles.ourExpertise}>
              <div className={styles.ourExpertiseIn}>
                Our Expertise in Action
              </div>
            </div>
            <div className={styles.iconParent}>
              <div className={styles.icon}>
                <div className={styles.iconContainers}>
                  <div className={styles.iconBackgrounds} />
                  <img
                    className={styles.weather5345642Icon}
                    loading="lazy"
                    alt=""
                    src="/weather-534564-2@2x.png"
                  />
                </div>
              </div>
              <div className={styles.icon1}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.mass99840402Icon}
                    loading="lazy"
                    alt=""
                    src="/mass-9984040-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.caseStudyPair}>
          <div className={styles.caseStudies}>
            <b className={styles.effectiveCtas}>Effective CTAs</b>
            <div className={styles.seeHowOur}>
              {" "}
              See how our strategic CTAs drove a significant increase in
              property inquiries and accelerated sales for a real estate agency.
            </div>
          </div>
          <div className={styles.caseStudies1}>
            <b className={styles.conversionOptimizedLandingP}>
              Conversion-Optimized Landing Pages
            </b>
            <div className={styles.exploreACase}>
              Explore a case study where our landing page optimization increased
              property lead conversion rates by 30%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseContainer;
