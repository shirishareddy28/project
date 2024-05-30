import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ServiceCard.module.css";

export type ServiceCardType = {
  className?: string;
  group117?: string;
  automotiveSEO?: string;
  driveYourSuccessWithAutom?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const ServiceCard: FunctionComponent<ServiceCardType> = ({
  className = "",
  group117,
  automotiveSEO,
  driveYourSuccessWithAutom,
  propPadding,
}) => {
  const serviceCard1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.serviceCard, className].join(" ")}
      style={serviceCard1Style}
    >
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src={group117} />
        <b className={styles.automotiveSeo}>{automotiveSEO}</b>
      </div>
      <p className={styles.driveYourSuccess}>{driveYourSuccessWithAutom}</p>
    </div>
  );
};

export default ServiceCard;
