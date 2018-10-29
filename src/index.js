import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { randomize } from "./utils/index";
import { useInterval } from "./hooks/hooks";
import Block from "./Block";
import Numbers from "./Numbers";
import "./styles.css";

const playStates = {
  playing: 0,
  lose: 1,
  win: 2,
  stopped: 3
};

const App = () => {
  const [state, setState] = useState(playStates.stopped);
  const [valor, setValor] = useState(0);
  const [target, setTarget] = useState(randomize(1, 50));
  const [time, resetTime, startInterval, stopInterval] = useInterval(1000);

  useEffect(
    () => {
      if (state === playStates.playing) {
        setTarget(randomize(1, 50));
        setValor(0);
        resetTime();
        startInterval();
      } else if (state === playStates.lose) {
        stopInterval();
      } else if (state === playStates.win) {
        stopInterval();
      } else if (state === playStates.stopped) {
        stopInterval();
      }
    },
    [state]
  );
  useEffect(
    () => {
      if (state === playStates.playing) {
        if (time >= 15) {
          setState(playStates.lose);
        }
      }
    },
    [time]
  );
  useEffect(
    () => {
      if (target === valor) {
        setState(playStates.win);
      } else if (valor > target) {
        setState(playStates.lose);
      }
    },
    [valor]
  );

  const choiceClickHandler = val => setValor(prev => prev + val);

  const startButtonHandler = () => {
    setState(playStates.playing);
  };

  return (
    <div className="game">
      <div className="help">
        {(state == playStates.playing || state === playStates.stopped) &&
          "Pick numbers that sum to the target in 15 seconds "}
        {state == playStates.lose && "You lose"}
        {state == playStates.win && "You Won"}
        {state == playStates.stopped && "to begin press Start"}
      </div>
      <Block classes={["target"]} value={target} />
      <Block classes={["sum"]} value={valor} />
      {state == playStates.playing && (
        <Numbers target={target} clickHandler={choiceClickHandler} />
      )}
      <div className="footer">
        <div className="timer-value">{time}</div>
        <button onClick={startButtonHandler}>Start</button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
