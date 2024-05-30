import { FunctionComponent } from "react";
import ServiceCard1 from "./ServiceCard1";
import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <section className={[styles.services, className].join(" ")}>
      <div className={styles.servicesSection}>
        <div className={styles.servicesContent}>
          <div className={styles.servicesHeading}>
            <b className={styles.ourServiceOfferings}>Our Service Offerings</b>
            <div className={styles.strategiesThatDrive}>
              {" "}
              Strategies that Drive Property Market Excellence
            </div>
          </div>
          <div className={styles.serviceCards}>
            <ServiceCard1
              group117="/group-117.svg"
              automotiveSEO="Automotive SEO"
              driveYourSuccessWithAutom="Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
            />
            <ServiceCard
              group117="/group-117-1.svg"
              automotiveSEO="PPC Precision"
              driveYourSuccessWithAutom="Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
            />
            <ServiceCard
              group117="/group-117-2.svg"
              automotiveSEO="Social Acceleration"
              driveYourSuccessWithAutom=" Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
              propPadding="var(--padding-13xl) var(--padding-base)"
            />
            <ServiceCard
              group117="/group-117-3.svg"
              automotiveSEO="Content Excellence"
              driveYourSuccessWithAutom="Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
              propPadding="var(--padding-13xl) var(--padding-base) var(--padding-32xl)"
            />
            <ServiceCard1
              group117="/group-117-4.svg"
              automotiveSEO="Web Design"
              driveYourSuccessWithAutom="Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions."
              propPadding="var(--padding-13xl) var(--padding-base)"
            />
            <ServiceCard
              group117="/group-117-5.svg"
              automotiveSEO="Data-Driven Insights"
              driveYourSuccessWithAutom="Leverage data to refine your strategies, making informed decisions that drive revenue growth."
              propPadding="var(--padding-13xl) var(--padding-base) var(--padding-32xl)"
            />
            <ServiceCard
              group117="/group-117-6.svg"
              automotiveSEO="End-to-End Solutions"
              driveYourSuccessWithAutom="From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
              propPadding="var(--padding-13xl) var(--padding-base)"
            />
            <ServiceCard1
              group117="/group-117-7.svg"
              automotiveSEO="Video marketing"
              driveYourSuccessWithAutom="Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
              propPadding="var(--padding-13xl) var(--padding-base) var(--padding-32xl)"
            />
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
    </section>
  );
};

export default Services;
