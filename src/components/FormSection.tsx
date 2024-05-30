import { FunctionComponent } from "react";
import InputLabels from "./InputLabels";
import styles from "./FormSection.module.css";

export type FormSectionType = {
  className?: string;
};

const FormSection: FunctionComponent<FormSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.formSection, className].join(" ")}>
      <div className={styles.formSectionChild} />
      <div className={styles.formSectionItem} />
      <div className={styles.formContent}>
        <div className={styles.formHeading}>
          <div className={styles.connectWithOur}>
            Connect with Our Digital Marketing Experts
          </div>
          <div className={styles.reachOutFor}>
            Reach Out for Tailored Strategies and Results-Driven Solutions.
            Let's Elevate Your Online Presence Together
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <form className={styles.formFieldsContainer}>
          <div className={styles.formInputs}>
            <div className={styles.inputFields}>
              <InputLabels
                name1="Name"
                enterYourNamePlaceholder="Enter your name"
              />
              <InputLabels
                name1="Phone"
                enterYourNamePlaceholder="Enter your Number"
                propMinWidth="50px"
                propPadding="var(--padding-7xs) var(--padding-5xs) var(--padding-7xs) var(--padding-2xs)"
                propOverflow="hidden"
              />
              <InputLabels
                name1="Email"
                enterYourNamePlaceholder="Enter your Total No of Vehicles:"
                propMinWidth="42px"
                propPadding="var(--padding-7xs) var(--padding-3xs) var(--padding-7xs) var(--padding-2xs)"
                propOverflow="unset"
              />
            </div>
            <div className={styles.messageInput}>
              <div className={styles.messageInputWrapper}>
                <b className={styles.message}>Message</b>
                <div className={styles.messagePlaceholderWrapper}>
                  <p className={styles.enterYourMessage}>Enter your Message.</p>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.largeButton}>
            <b className={styles.getStarted}>Get started</b>
            <img
              className={styles.customerService2FillIcon}
              alt=""
              src="/customerservice2fill.svg"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
