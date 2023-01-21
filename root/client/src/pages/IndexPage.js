import React from "react";
import Button from "../components/common/Button";
import { style, layout } from "../assets/css/styles";
import { useGameContext } from "../context/GameContext";

const IndexPage = () => {
  const {handleInitGameModal } = useGameContext();
  return (
    <section id="hero-section">
      <div className="m-16 text-4xl" id="hero-title">
        Wellcom to
        <br />
        <span className="text-orange-500 text-6xl underline decoration-wavy decoration-sky-500 hover:decoration-orange-500 hover:text-sky-400">
          <span className="font-extrabold italic ">XO</span>GAME
        </span>
      </div>
      <Button
        onClick={() => handleInitGameModal()}
        className={`${style.mainTransition}  ${style.mainButton} shadow-lg`}
      >
        PLAY
      </Button>
    </section>
  );
};

export default IndexPage;
