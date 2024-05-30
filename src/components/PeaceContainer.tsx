import { FunctionComponent } from "react";
import styles from "./PeaceContainer.module.css";

export type PeaceContainerType = {
  className?: string;
};

const PeaceContainer: FunctionComponent<PeaceContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.peaceContainer, className].join(" ")}>
      <div className={styles.contentWrapperParent}>
        <div className={styles.contentWrapper}>
          <b className={styles.yourPeaceOf}>Your Peace of Mind</b>
          <p className={styles.throughOurConversionFocusedContainer}>
            <span className={styles.throughOurConversionFocused}>
              Through our conversion-focused strategies, we ensure that property
              seekers are not just visitors, but engaged prospects ready to make
              their next move in the real estate market
            </span>
          </p>
        </div>
        <div className={styles.mButtonsWrapper}>
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
    </section>
  );
};

export default PeaceContainer;
