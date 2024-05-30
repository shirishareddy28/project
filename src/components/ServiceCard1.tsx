import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ServiceCard1.module.css";

export type ServiceCard1Type = {
  className?: string;
  group117?: string;
  automotiveSEO?: string;
  driveYourSuccessWithAutom?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const ServiceCard1: FunctionComponent<ServiceCard1Type> = ({
  className = "",
  group117,
  automotiveSEO,
  driveYourSuccessWithAutom,
  propPadding,
}) => {
  const serviceCardStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.serviceCard, className].join(" ")}
      style={serviceCardStyle}
    >
      <div className={styles.cardContainer}>
        <img
          className={styles.cardContainerChild}
          loading="lazy"
          alt=""
          src={group117}
        />
        <b className={styles.automotiveSeo}>{automotiveSEO}</b>
      </div>
      <p className={styles.driveYourSuccess}>{driveYourSuccessWithAutom}</p>
    </div>
  );
};

export default ServiceCard1;
