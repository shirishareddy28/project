import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FeaturePair.module.css";

export type FeaturePairType = {
  className?: string;
  virtual105695042?: string;
  callToActionOptimization?: string;
  ourCarefullyCraftedCTAsGu?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FeaturePair: FunctionComponent<FeaturePairType> = ({
  className = "",
  virtual105695042,
  callToActionOptimization,
  ourCarefullyCraftedCTAsGu,
  propPadding,
}) => {
  const featurePairStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.featurePair, className].join(" ")}
      style={featurePairStyle}
    >
      <div className={styles.iconPair}>
        <div className={styles.icon}>
          <div className={styles.iconContainers}>
            <div className={styles.iconCircles} />
            <img
              className={styles.virtual105695042Icon}
              loading="lazy"
              alt=""
              src={virtual105695042}
            />
          </div>
        </div>
      </div>
      <div className={styles.descriptionPair}>
        <b className={styles.callToActionOptimization}>
          {callToActionOptimization}
        </b>
        <p className={styles.ourCarefullyCrafted}>
          {ourCarefullyCraftedCTAsGu}
        </p>
      </div>
    </div>
  );
};

export default FeaturePair;
