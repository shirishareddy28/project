import { FunctionComponent } from "react";
import styles from "./SocialProofContainer.module.css";

export type SocialProofContainerType = {
  className?: string;
};

const SocialProofContainer: FunctionComponent<SocialProofContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.socialProofContainer, className].join(" ")}>
      <div className={styles.copyrightParent}>
        <div className={styles.copyright}>
          <div className={styles.modelIcon}>
            <div className={styles.icon}>
              <div className={styles.iconContainers}>
                <div className={styles.iconBackgrounds} />
                <img
                  className={styles.dModel90408663Icon}
                  loading="lazy"
                  alt=""
                  src="/3dmodel-9040866-3@2x.png"
                />
              </div>
            </div>
            <div className={styles.icon1}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.medal24390781Icon}
                  alt=""
                  src="/medal-2439078-1@2x.png"
                />
                <img
                  className={styles.medal243907811}
                  loading="lazy"
                  alt=""
                  src="/medal-2439078-1-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.caseStudyPair}>
          <div className={styles.caseStudies}>
            <b className={styles.trustBuildingWith}>
              Trust Building with Social Proof
            </b>
            <p className={styles.discoverHowLeveraging}>
              Discover how leveraging client testimonials boosted buyer
              confidence, leading to higher conversion rates for a property
              development project
            </p>
          </div>
          <div className={styles.caseStudies1}>
            <b className={styles.mobileFirstSuccess}>Mobile-First Success:</b>
            <div className={styles.learnHowOur}>
              {" "}
              Learn how our mobile-responsive design approach resulted in a 25%
              increase in inquiries from mobile users for a real estate agency.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofContainer;
