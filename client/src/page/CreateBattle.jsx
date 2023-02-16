import React from "react";
import { PageHOC } from "../components";
const CreateBattle = () => {
  return (
    <div>
      <h1 className="text-5xl p-3"></h1>
     
    </div>
  );
};

export default PageHOC(
    CreateBattle,
  <>
    Create <br /> a new battle
  </>,
  <>
    Create your own battle and enjoy the game. <br />
    The game is built with React, Solidity, and Avalanche's C-Chain.
    Let's us Game!!!
  </>
);
