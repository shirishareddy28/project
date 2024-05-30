import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.realEstateInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.realEstateFocusedDigitalMaWrapper}>
          <b className={styles.realEstateFocusedDigital}>
            Real Estate-Focused Digital Mastery
          </b>
        </div>
        <div className={styles.contentAndButton}>
          <div className={styles.directingTheArrowUpcuateWrapper}>
            <img
              className={styles.directingTheArrowUpcuateIcon}
              loading="lazy"
              alt=""
              src="/directingthearrowupcuate.svg"
            />
          </div>
          <div className={styles.descriptionParent}>
            <div className={styles.description}>
              <b className={styles.unlockThePotential}>
                Unlock the Potential of Digital Real Estate Excellence
              </b>
              <p className={styles.atOsumareWe}>
                At Osumare, we understand that the real estate landscape demands
                a digital presence that aligns with the intricacies of property
                marketing. Our range of specialized services is meticulously
                designed to catapult your brand's success in the ever-evolving
                digital property market.
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
    </section>
  );
};

export default FrameComponent2;
