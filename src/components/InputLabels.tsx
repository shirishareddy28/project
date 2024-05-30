import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputLabels.module.css";

export type InputLabelsType = {
  className?: string;
  name1?: string;
  enterYourNamePlaceholder?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propOverflow?: CSSProperties["overflow"];
};

const InputLabels: FunctionComponent<InputLabelsType> = ({
  className = "",
  name1,
  enterYourNamePlaceholder,
  propMinWidth,
  propPadding,
  propOverflow,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const inputPlaceholdersStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      overflow: propOverflow,
    };
  }, [propPadding, propOverflow]);

  return (
    <div className={[styles.inputLabels, className].join(" ")}>
      <b className={styles.name} style={nameStyle}>
        {name1}
      </b>
      <div className={styles.inputPlaceholders} style={inputPlaceholdersStyle}>
        <input
          className={styles.enterYourName}
          placeholder={enterYourNamePlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default InputLabels;
