import { FunctionComponent } from "react";
import TrendCards from "./TrendCards";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.realEstateInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.insightsHeadingsWrapper}>
          <div className={styles.insightsHeadings}>
            <b className={styles.navigatingRealEstates}>
              Navigating Real Estate's Digital Landscape
            </b>
            <div className={styles.insightsForReal}>
              Insights for Real Estate Marketing Advantage
            </div>
          </div>
        </div>
        <div className={styles.marketTrends}>
          <div className={styles.trendsContainer}>
            <TrendCards
              group116="/group-116.svg"
              marketTrendsAnalysis="Market Trends Analysis"
              predictiveInsightsToGuide="Predictive insights to guide real estate strategies."
            />
            <TrendCards
              group116="/group-116-1.svg"
              marketTrendsAnalysis="Targeted Buyer Persona"
              predictiveInsightsToGuide="Understand and connect with your ideal property buyers."
              propPadding="var(--padding-24xl) var(--padding-12xl)"
              propPadding1="var(--padding-7xs) 0px 0px"
              propMargin="0"
            />
            <TrendCards
              group116="/group-116-2.svg"
              marketTrendsAnalysis="Competitor Insights"
              predictiveInsightsToGuide="Stand out in the property market with informed strategies."
              propPadding="var(--padding-24xl) var(--padding-12xl)"
              propPadding1="var(--padding-7xs) 0px 0px"
              propMargin="0"
            />
            <TrendCards
              group116="/group-116-3.svg"
              marketTrendsAnalysis="Visual Content Appeal"
              predictiveInsightsToGuide="Captivate buyers with appealing visuals and immersive experiences."
              propPadding="43px 31px"
              propPadding1="var(--padding-lg) 0px 0px"
              propMargin="0"
            />
          </div>
          <div className={styles.visualContent}>
            <div className={styles.backgroundContainer}>
              <div className={styles.innerBackground}>
                <img
                  className={styles.backgroundCompleteIcon}
                  alt=""
                  src="/backgroundcomplete.svg"
                />
                <div className={styles.simpleBackground}>
                  <img className={styles.backgroundSimpleIcon} alt="" />
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector1.svg"
                    />
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.vectorIcon4}
                        alt=""
                        src="/vector-3.svg"
                      />
                      <img
                        className={styles.vectorIcon5}
                        alt=""
                        src="/vector-4.svg"
                      />
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon7}
                        alt=""
                        src="/vector-6.svg"
                      />
                      <div className={styles.weAre}>We Are</div>
                      <div className={styles.expert}>Expert</div>
                      <div className={styles.frameDiv}>
                        <img
                          className={styles.vectorIcon8}
                          alt=""
                          src="/vector-7.svg"
                        />
                        <img
                          className={styles.vectorIcon9}
                          alt=""
                          src="/vector-8.svg"
                        />
                      </div>
                      <img
                        className={styles.vectorIcon10}
                        alt=""
                        src="/vector-9.svg"
                      />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group.svg"
                      />
                      <img
                        className={styles.groupIcon1}
                        alt=""
                        src="/group-1.svg"
                      />
                      <img
                        className={styles.groupIcon2}
                        alt=""
                        src="/group-2.svg"
                      />
                      <img
                        className={styles.groupIcon3}
                        alt=""
                        src="/group-3.svg"
                      />
                      <img
                        className={styles.groupIcon4}
                        alt=""
                        src="/group-4.svg"
                      />
                      <img
                        className={styles.vectorIcon11}
                        alt=""
                        src="/vector-10.svg"
                      />
                      <img
                        className={styles.vectorIcon12}
                        alt=""
                        src="/vector-11.svg"
                      />
                      <img
                        className={styles.vectorIcon13}
                        alt=""
                        src="/vector-12.svg"
                      />
                      <div className={styles.vectorParent1}>
                        <img
                          className={styles.vectorIcon14}
                          alt=""
                          src="/vector-13.svg"
                        />
                        <img
                          className={styles.vectorIcon15}
                          alt=""
                          src="/vector-14.svg"
                        />
                        <img
                          className={styles.vectorIcon16}
                          alt=""
                          src="/vector-15.svg"
                        />
                        <img
                          className={styles.vectorIcon17}
                          alt=""
                          src="/vector-16.svg"
                        />
                        <img
                          className={styles.vectorIcon18}
                          alt=""
                          src="/vector-17.svg"
                        />
                      </div>
                      <img
                        className={styles.vectorIcon19}
                        alt=""
                        src="/vector-18.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.shadowIcon} alt="" src="/shadow.svg" />
              <img
                className={styles.plant2Icon}
                loading="lazy"
                alt=""
                src="/plant2.svg"
              />
              <div className={styles.vectorParent2}>
                <img
                  className={styles.vectorIcon20}
                  alt=""
                  src="/vector-19.svg"
                />
                <img className={styles.groupIcon5} alt="" src="/group-5.svg" />
              </div>
              <div className={styles.shapeParent}>
                <img className={styles.shapeIcon} alt="" src="/vector-20.svg" />
                <img
                  className={styles.shapeIcon1}
                  alt=""
                  src="/vector-21.svg"
                />
                <img
                  className={styles.shapeIcon2}
                  alt=""
                  src="/vector-22.svg"
                />
                <img
                  className={styles.shapeIcon3}
                  alt=""
                  src="/vector-23.svg"
                />
                <img
                  className={styles.shapeIcon4}
                  alt=""
                  src="/vector-24.svg"
                />
                <img
                  className={styles.shapeIcon5}
                  alt=""
                  src="/vector-25.svg"
                />
                <img
                  className={styles.shapeIcon6}
                  alt=""
                  src="/vector-26.svg"
                />
                <img
                  className={styles.shapeIcon7}
                  alt=""
                  src="/vector-27.svg"
                />
                <img
                  className={styles.shapeIcon8}
                  alt=""
                  src="/vector-28.svg"
                />
                <img
                  className={styles.shapeIcon9}
                  alt=""
                  src="/vector-29.svg"
                />
                <img
                  className={styles.shapeIcon10}
                  alt=""
                  src="/vector-30.svg"
                />
                <img
                  className={styles.shapeIcon11}
                  alt=""
                  src="/vector-31.svg"
                />
                <img
                  className={styles.shapeIcon12}
                  alt=""
                  src="/vector-32.svg"
                />
                <img className={styles.groupIcon6} alt="" src="/group-6.svg" />
                <img
                  className={styles.characterIcon}
                  alt=""
                  src="/character.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
