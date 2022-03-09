import Head from "next/head";
import Image from "next/image";
import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

export default function HiitTimer() {

  const [counter, setCounter] = useState();
  const [restCounter, setRestCounter] = useState();
  const [repCounter, setRepCounter] = useState();
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [isResting, setIsResting] = useState(false);
  const [currentTime, SetCurrentTime] = useState();


  const timerStart = () => {
    
    let timerInterval = setInterval(() => {

      if(counter <= 0) {
        clearInterval(timerInterval)
      }

      setCounter(counter--)

    }, 1000)

    console.log(counter);

  }


  const handleInput = (event) => {
    // on input form submit, grabs input values and set them to a const value

    const time = document.querySelector("[name='time-in']").value;
    const rest = document.querySelector("[name='rest-in']").value;
    const reps = document.querySelector("[name='reps-in']").value;

    console.log(
      "input time: ",
      time,
      "input rest: ",
      rest,
      "input reps: ",
      reps
    );

    // applies captured form values to state

    setCounter(time);
    setRestCounter(rest);
    setRepCounter(reps);
  };

  console.log("is the timer paused?  ", isPaused);

  const handleReset = (event) => {
    handleInput();
  }

  return (
    <div>
      <div className="counter-div">
        <p className="counter-p">Time left: {counter}</p>
        <p className="rest-p">Rest time: {restCounter}</p>
        <p className="reps-p">Reps Remaining: {repCounter}</p>
      </div>

      <div className="counter-control-btns">
        <button className="start-btn" onClick={() => timerStart()}>
          Start
        </button>
        <button className="stop-btn" onClick={() => setIsPaused(true)}>
          Stop
        </button>
        <button
          className="reset-btn"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="user-input-div">
        <input className="input-time" placeholder="Rep Time" name="time-in" />
        <input className="input-rest" placeholder="Rest Time" name="rest-in" />
        <input className="input-rep" placeholder="Total Reps" name="reps-in" />

        <button type="submit" className="input-submit" onClick={handleInput}>
          Submit
        </button>
      </div>
    </div>
  );
}
