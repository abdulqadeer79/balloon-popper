import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Balloon from "./balloon";
import Mine from "./mine";
import GameOverModal from "./gameovermodal";

function Screen() {
  const [score, setScore] = useState(0);
  const [balloons, setBalloons] = useState([]);
  const [mines, setMines] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [balloonTimer, setBalloonTimer] = useState(0);

  const ballonList = balloons.map((balloon) => (
    <Balloon
      id={balloon.id}
      key={balloon.id}
      handleBalloonClick={handleBalloonClick}
    />
  ));

  const mineList = mines.map((mine) => (
    <Mine
      id={mine.id}
      popped={mine.popped}
      key={mine.id}
      handleMineClick={handleMineClick}
    />
  ));

  // adds Mines
  function addMine() {
    const newMine = { id: "mine-" + nanoid() };
    setMines([newMine]);
    setBalloons([]);
    setGameOver(false);
  }

  // Adds 1 to score when the balloon is clicked
  function addScore() {
    setScore(score + 1);
  }

  // adds Ballons
  function addBalloon() {
    const newBalloon = { id: "ballon-" + nanoid() };
    setBalloons([newBalloon]);
    setMines([]);
    setBalloonTimer(balloonTimer + 1);
  }

  function handleBalloonClick() {
    generateItem();
    setBalloons([]);
    setMines([]);
    addScore();
    setBalloonTimer(balloonTimer - 1);
  }

  function handleMineClick() {
    setGameOver(true);
  }

  function generateItem() {
    const randomNumber = Math.floor(Math.random() * 4);
    randomNumber === 3 ? addMine() : addBalloon();
  }

  function resetScore() {
    setScore(0);
    setGameOver(false);
    setBalloonTimer(0);
  }
  function gameStatus(check) {
    if (check > 0) {
      setGameOver(true);
    }
  }

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      if (gameOver === false) {
        generateItem();
        gameStatus(balloonTimer);
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, [gameOver, balloonTimer]);

  return (
    <div>
      <p>
        <b> score: {score}</b>
      </p>
      {ballonList}
      {mineList}
      {gameOver === true ? (
        <GameOverModal resetScore={resetScore} score={score} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Screen;
