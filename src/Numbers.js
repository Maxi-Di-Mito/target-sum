import React, { memo, useState, useEffect } from "react";
import { randomizeChoices } from "./utils/index";

export default memo(props => {
  const [choices, setChoices] = useState([]);

  useEffect(
    () => {
      setChoices(randomizeChoices(props.target));
    },
    [props.target]
  );

  const clickChoiceHandler = idx => {
    const c = choices[idx];
    props.clickHandler(c.value);
    setChoices(
      choices.map((c, i) => {
        if (i === idx) return { clicked: true, value: c.value };
        return { ...c };
      })
    );
  };

  return (
    <div className="challenge-numbers">
      {choices.map((c, idx) => (
        <button
          key={idx}
          className="number"
          disabled={c.clicked}
          onClick={() => clickChoiceHandler(idx)}
        >
          {c.value}
        </button>
      ))}
    </div>
  );
});
