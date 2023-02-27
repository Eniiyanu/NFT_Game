import React, {useState} from "react";
import { PageHOC, CustomInput } from "../components";
import { useGlobalContext } from "../context";
const Home = () => {
  //const {demo} = useGlobalContext();
  const { contract, walletAddress } = useGlobalContext();
  const [playerName, setPlayerName] = React.useState("");
  return (
    <div className="flex flex-col">
     <CustomInput
  label = "Player Name"
  placeholder = "Enter your  Player name"
  value = {playerName}
  handleValueChange = {(e) => setPlayerName(e.target.value)}


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
