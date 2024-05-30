import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TrendCards.module.css";

export type TrendCardsType = {
  className?: string;
  group116?: string;
  marketTrendsAnalysis?: string;
  predictiveInsightsToGuide?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propMargin?: CSSProperties["margin"];
};

const TrendCards: FunctionComponent<TrendCardsType> = ({
  className = "",
  group116,
  marketTrendsAnalysis,
  predictiveInsightsToGuide,
  propPadding,
  propPadding1,
  propMargin,
}) => {
  const trendCardsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const trendCardItemsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const predictiveInsightsToStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div
      className={[styles.trendCards, className].join(" ")}
      style={trendCardsStyle}
    >
      <div className={styles.trendCardItems} style={trendCardItemsStyle}>
        <img
          className={styles.trendCardItemsChild}
          loading="lazy"
          alt=""
          src={group116}
        />
      </div>
      <div className={styles.marketTrendsAnalysisParent}>
        <div className={styles.marketTrendsAnalysis}>
          {marketTrendsAnalysis}
        </div>
        <div
          className={styles.predictiveInsightsTo}
          style={predictiveInsightsToStyle}
        >
          {predictiveInsightsToGuide}
        </div>
      </div>
    </div>
  );
};

export default TrendCards;
