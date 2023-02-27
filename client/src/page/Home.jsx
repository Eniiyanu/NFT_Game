import React from "react";
import { PageHOC } from "../components";
import { useGlobalContext } from "../context";
const Home = () => {
  //const {demo} = useGlobalContext();
  const { contract, walletAddress } = useGlobalContext();
  return (
    <div className="flex flex-col">
     <CustomInput


     />
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
