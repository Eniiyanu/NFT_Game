import React, {useState} from "react";
import { PageHOC, CustomInput, CustomButton } from "../components";
import { useGlobalContext } from "../context";
const Home = () => {
  //const {demo} = useGlobalContext();
  const { contract, walletAddress } = useGlobalContext();
  const [playerName, setPlayerName] = React.useState("");

  const handleClick = async () => {
    try {
      const tx = await contract.registerPlayer(playerName, {
        from: walletAddress,
      });
      console.log(tx);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="flex flex-col">
     <CustomInput
  label = "Player Name"
  placeholder = "Enter your First name to play the game"
  value = {playerName}
  handleValueChange = {(e) => setPlayerName(e.target.value)}


     />
<CustomButton 

title = "Register"
handleClick = {handleClick}
  restStyles= "mt-6"
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
