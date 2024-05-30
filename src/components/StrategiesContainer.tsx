import { FunctionComponent } from "react";
import FeaturePair from "./FeaturePair";
import styles from "./StrategiesContainer.module.css";

export type StrategiesContainerType = {
  className?: string;
};

const StrategiesContainer: FunctionComponent<StrategiesContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.strategiesContainer, className].join(" ")}>
      <div className={styles.propertyInquiriesParent}>
        <div className={styles.propertyInquiries}>
          <div className={styles.titleContent}>
            <b className={styles.drivingPropertyInquiries}>
              {" "}
              Driving Property Inquiries to Conversions
            </b>
            <div className={styles.streamlinedStrategiesFor}>
              Streamlined Strategies for Real Estate Success
            </div>
          </div>
        </div>
        <div className={styles.purchasePathContainer}>
          <div className={styles.houseSearchingbroParent}>
            <img
              className={styles.houseSearchingbroIcon}
              loading="lazy"
              alt=""
              src="/housesearchingbro.svg"
            />
            <div className={styles.frameParent}>
              <div className={styles.optimizedPathToPropertyPurParent}>
                <b className={styles.optimizedPathTo}>
                  Optimized Path to Property Purchase
                </b>
                <p className={styles.inTheDynamic}>
                  In the dynamic realm of real estate, the journey from a
                  property inquiry to a successful conversion demands a
                  well-crafted approach. At Osumare, we specialize in guiding
                  potential buyers through this journey seamlessly, maximizing
                  inquiries-turned-conversions with expert strategies.
                </p>
              </div>
              <button className={styles.mButtons}>
                <b className={styles.getStarted}>Get started</b>
                <img
                  className={styles.customerService2FillIcon}
                  alt=""
                  src="/customerservice2fill1.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <b className={styles.drivingPropertyInquiries1}>
          Driving Property Inquiries to Conversions
        </b>
        <div className={styles.featurePairParent}>
          <FeaturePair
            virtual105695042="/virtual-10569504-2@2x.png"
            callToActionOptimization="Call-to-Action Optimization"
            ourCarefullyCraftedCTAsGu="Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
          />
          <FeaturePair
            virtual105695042="/onlinestore-3929777-2@2x.png"
            callToActionOptimization="Landing Page Efficiency"
            ourCarefullyCraftedCTAsGu="Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
            propPadding="var(--padding-17xl) 0px"
          />
        </div>
        <div className={styles.frameGroup}>
          <FeaturePair
            virtual105695042="/3d-9345318-2@2x.png"
            callToActionOptimization="Social Proof Utilization"
            ourCarefullyCraftedCTAsGu="Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action"
            propPadding="var(--padding-17xl) 0px"
          />
          <FeaturePair
            virtual105695042="/augmentedreality-7065057-2@2x.png"
            callToActionOptimization="Mobile-Friendly Experience"
            ourCarefullyCraftedCTAsGu="With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
            propPadding="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default StrategiesContainer;
