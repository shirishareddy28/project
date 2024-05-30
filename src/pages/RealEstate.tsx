import { FunctionComponent } from "react";
import ContentWrapper from "../components/ContentWrapper";
import FrameComponent2 from "../components/FrameComponent2";
import Services from "../components/Services";
import FrameComponent1 from "../components/FrameComponent1";
import StrategiesContainer from "../components/StrategiesContainer";
import ExpertiseContainer from "../components/ExpertiseContainer";
import SocialProofContainer from "../components/SocialProofContainer";
import PeaceContainer from "../components/PeaceContainer";
import Testimonials from "../components/Testimonials";
import FrameComponent from "../components/FrameComponent";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";
import styles from "./RealEstate.module.css";

const RealEstate: FunctionComponentRealEstateType = () => {
  return (
    <div className={styles.realEstate}>
      <div className={styles.petShop} />
      <div className={styles.workCard}>
        <img
          className={styles.whatsappImage20230608At9}
          alt=""
          src="/whatsapp-image-20230608-at-952-2@2x.png"
        />
        <img className={styles.rathi1Icon} alt="" src="/rathi-1@2x.png" />
        <img className={styles.savex1Icon} alt="" src="/savex-1@2x.png" />
        <img className={styles.gq11} alt="" src="/gq-1-1@2x.png" />
        <img className={styles.rathi11} alt="" src="/rathi-1-1@2x.png" />
        <img className={styles.rathi2Icon} alt="" src="/rathi-2@2x.png" />
        <img className={styles.wegile1Icon} alt="" src="/wegile-1@2x.png" />
        <img className={styles.leewayIcon} alt="" src="/leeway@2x.png" />
        <img className={styles.tabish1121} alt="" src="/tabish-11-2-1@2x.png" />
        <img className={styles.leeway02Icon} alt="" src="/leeway-02@2x.png" />
        <img className={styles.savex11} alt="" src="/savex-1-1@2x.png" />
        <img className={styles.neemans21} alt="" src="/neemans-2-1@2x.png" />
        <img className={styles.neemans1Icon} alt="" src="/neemans-1@2x.png" />
        <img
          className={styles.whatsappImage20230608At91}
          alt=""
          src="/whatsapp-image-20230608-at-955-2@2x.png"
        />
        <div className={styles.whatsappImage20230608At92} />
        <div className={styles.eTextContiner} />
        <img
          className={styles.whatsappImage20230608At93}
          alt=""
          src="/whatsapp-image-20230608-at-955-1@2x.png"
        />
        <img
          className={styles.bc96921541661071Icon}
          alt=""
          src="/bc9692154166107-1@2x.png"
        />
      </div>
      <section className={styles.mainContent}>
        <header className={styles.nav}>
          <img
            className={styles.osumareLogo0124}
            loading="lazy"
            alt=""
            src="/osumare-logo01-2-4@2x.png"
          />
          <div className={styles.contactButton}>
            <button className={styles.secondaryButton}>
              <a className={styles.contactUs}>Contact us</a>
              <img
                className={styles.customerService2FillIcon}
                alt=""
                src="/customerservice2fill.svg"
              />
            </button>
          </div>
        </header>
      </section>
      <ContentWrapper />
      <FrameComponent2 />
      <Services />
      <FrameComponent1 />
      <StrategiesContainer />
      <ExpertiseContainer />
      <div className={styles.shape} />
      <div className={styles.realEstateChild} />
      <SocialProofContainer />
      <PeaceContainer />
      <section className={styles.realEstateInner}>
        <div className={styles.contentWrapperParent}>
          <div className={styles.contentWrapper}>
            <div className={styles.whatOurPharmaPartnersSayParent}>
              <b className={styles.whatOurPharma}>
                What Our Pharma Partners Say
              </b>
              <div className={styles.drivingTransformationsOne}>
                Driving Transformations, One Brand at a Time
              </div>
            </div>
          </div>
          <Testimonials />
          <FrameComponent />
        </div>
      </section>
      <FormSection />
      <Footer />
    </div>
  );
};

export default RealEstate;
