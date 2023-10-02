import React, { useState, useEffect } from "react";
import styles from "@/components/Countdown.module.css";
import CountdownButton from "./CountdownButton";
import { BsPauseCircle, BsPlayCircle, BsSkipEndCircle } from "react-icons/bs";
import { FOCUS_MODE, BREAK_MODE } from "@/common/constants";

export default function Countdown() {
  const [timer, setTimer] = useState(1);
  const [isTimerPause, setTimerPause] = useState(true);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isModeFocus, setIsModeFocus] = useState(true);

  //if pause, set interval to subtract by one and check if timer is == 0 and if so then skip interval
  const startHandler = () => {
    if (isTimerPause) {
      setTimerPause(false);
      setTimerInterval(
        setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000)
      );
    }
    return;
  };

  const pauseHandler = () => {
    if (isTimerPause) {
      return;
    }
    setTimerInterval((prev) => clearInterval(prev));
    setTimerPause((prev) => true);
  };

  //clear interval and switch mode to opposite, if mode is focus then set timer to 25m, otherwise set to 5 m
  const skipHandler = () => {
    if (timerInterval) {
      setTimerInterval((prev) => clearInterval(prev));
    }
    setIsModeFocus((prev) => !prev);
    setTimer((prev) => (prev === 300 ? 1500 : 300));
    setTimerPause(prev => true)
  };

  useEffect(() => {
    if (timer < 0) {
      skipHandler();
    }
  }, [timer]);

  const convertTimer = () => {
    var sec_num = parseInt(timer, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  };

  return (
    <>
      <div className={styles[`mode-display`]}>
        {" "}
        {isModeFocus ? FOCUS_MODE : BREAK_MODE} Session
      </div>
      <div className={styles[`timer-display`]}>{convertTimer()}</div>
      <CountdownButton onClick={startHandler}>
        <BsPlayCircle />
      </CountdownButton>
      <CountdownButton onClick={pauseHandler}>
        <BsPauseCircle />
      </CountdownButton>
      <CountdownButton onClick={skipHandler}>
        <BsSkipEndCircle />
      </CountdownButton>
    </>
  );
}
