import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useNavigate } from "react-router-dom";

import {ABI, ADDRESS} from "../contract";


const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [walletAddress, setWalletAddress ] = useState('');
  const [ provider, setProvider ] = useState('');
  const [contract, setcontract]  = useState('');

  const updateCurrentWalletAddress = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
  };
  useEffect(() => {
    updateCurrentWalletAddress();
  }, []);

  useEffect(() => {
    setSmartContractAndProvider = async () => {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const newProvider = new ethers.providers.Web3Provider(connection);
      const signer = newProvider.getSigner();
      const newContract = new ethers.Contract( ADDRESS, ABI, signer);
   
      setProvider(newProvider);
      setContatct(newContract);
    };
    setSmartContractAndProvider();
  }, []);

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
