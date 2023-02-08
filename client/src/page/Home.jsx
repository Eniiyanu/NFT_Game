import React from 'react';
import { PageHOC } from '../components';
const Home = () => {
  return (
    <div>
      <h1 className="text-5xl p-3">Avax Gods</h1>
      <h2 className="text-3xl p-3">NFT Battle-style Card Game</h2>
      <p className="text-xl p-3">Made with 💜 by Oluwaferanmi Cyber Prof</p>
    </div>
  )
};

export default PageHOC( 
Home,
<>Welcome to Avax Gods <br /> A Web3 Card game</>,
<>A battle-style card game built on Avalanche's C-Chain. <br />

The game is built with React, Solidity, and Avalanche's C-Chain. </>

);