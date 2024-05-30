import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.faqContentParent, className].join(" ")}>
      <div className={styles.faqContent}>
        <b className={styles.frequentlyAskedQuestions}>
          Frequently Asked Questions
        </b>
        <p className={styles.pinpointYourAudience}>
          Pinpoint your audience with precision, ensuring your marketing efforts
          reach those most likely to engage with your brand.
        </p>
      </div>
      <div className={styles.faq}>
        <div className={styles.divfaqBoxQuestion}>
          <div className={styles.questionWrapper}>
            <div className={styles.howDoesOsumare}>
              3. How does Osumare measure campaign success?
            </div>
            <div className={styles.ifaSolid}>
              <div className={styles.symbol}></div>
            </div>
          </div>
        </div>
        <div className={styles.divfaqBox}>
          <div className={styles.divfaqBoxQuestion1}>
            <div className={styles.howDoesOsumareMeasureCampaParent}>
              <div className={styles.howDoesOsumare1}>
                3. How does Osumare measure campaign success?
              </div>
              <div className={styles.ifaSolid1}>
                <div className={styles.symbol1}></div>
              </div>
            </div>
            <div className={styles.p} />
          </div>
        </div>
        <div className={styles.divfaqBox1}>
          <div className={styles.divfaqBoxQuestion2}>
            <div className={styles.answerQuestionContent}>
              <div className={styles.howDoesOsumare2}>
                3. How does Osumare measure campaign success?
              </div>
              <div className={styles.ifaSolid2}>
                <div className={styles.symbol2}></div>
              </div>
            </div>
            <div className={styles.p1} />
          </div>
          <div className={styles.divfaqBoxAnswer}>
            <p className={styles.weBelieveIn}>
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
