import React from "react";
import { PageHOC } from "../components";
const Home = () => {
  //const {demo} = useGlobalContext();
  
  return (
    <div>
      <h1 className="text-5xl p-3 "> </h1>
     
    </div>
  );
};

export default PageHOC(
  Home,
  <>
    Welcome to Avax Gods <br /> A Web3 Card game
  </>,
  <>
    A battle style card game built on Avalanche's C-Chain. <br />
    The game is built with React, Solidity, and Avalanche's C-Chain. Enjoy!
    Kindly support.
  </>
);
